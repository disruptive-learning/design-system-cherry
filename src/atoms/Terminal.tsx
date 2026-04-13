import * as React from "react"
import { cn } from "@/lib/utils"

interface TerminalLine {
  text: string
  type?: "command" | "output" | "comment"
  delay?: number
}

interface TerminalProps {
  lines: TerminalLine[]
  title?: string
  className?: string
  typingSpeed?: number
}

const Terminal = React.forwardRef<HTMLDivElement, TerminalProps>(
  ({ lines, title = "Terminal", className, typingSpeed = 50 }, ref) => {
    const [displayedLines, setDisplayedLines] = React.useState<
      { text: string; type: string }[]
    >([])
    const [currentLineIndex, setCurrentLineIndex] = React.useState(0)
    const [currentCharIndex, setCurrentCharIndex] = React.useState(0)
    const [isTyping, setIsTyping] = React.useState(true)

    React.useEffect(() => {
      if (currentLineIndex >= lines.length) {
        setIsTyping(false)
        return
      }

      const currentLine = lines[currentLineIndex]
      const lineDelay = currentLine.delay || 0

      if (currentCharIndex === 0 && lineDelay > 0) {
        const delayTimer = setTimeout(() => {
          setCurrentCharIndex(1)
        }, lineDelay)
        return () => clearTimeout(delayTimer)
      }

      if (currentCharIndex <= currentLine.text.length) {
        const timer = setTimeout(() => {
          setDisplayedLines((prev) => {
            const newLines = [...prev]
            if (newLines.length <= currentLineIndex) {
              newLines.push({
                text: currentLine.text.slice(0, currentCharIndex),
                type: currentLine.type || "command",
              })
            } else {
              newLines[currentLineIndex] = {
                text: currentLine.text.slice(0, currentCharIndex),
                type: currentLine.type || "command",
              }
            }
            return newLines
          })
          setCurrentCharIndex((prev) => prev + 1)
        }, typingSpeed)
        return () => clearTimeout(timer)
      } else {
        const nextLineTimer = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1)
          setCurrentCharIndex(0)
        }, 500)
        return () => clearTimeout(nextLineTimer)
      }
    }, [currentLineIndex, currentCharIndex, lines, typingSpeed])

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-2xl rounded-lg border bg-card overflow-hidden font-mono text-sm",
          className
        )}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-muted-foreground ml-2">{title}</span>
        </div>

        {/* Terminal content */}
        <div className="p-4 space-y-1 bg-background min-h-[200px]">
          {displayedLines.map((line, index) => (
            <div key={index} className="flex items-start gap-2">
              {line.type === "command" && (
                <span className="text-muted-foreground select-none">$</span>
              )}
              {line.type === "comment" && (
                <span className="text-muted-foreground select-none">#</span>
              )}
              <span
                className={cn(
                  line.type === "command" && "text-foreground",
                  line.type === "output" && "text-muted-foreground",
                  line.type === "comment" && "text-muted-foreground italic"
                )}
              >
                {line.text}
              </span>
              {index === currentLineIndex && isTyping && (
                <span className="w-2 h-4 bg-foreground animate-terminal-cursor" />
              )}
            </div>
          ))}
          {!isTyping && displayedLines.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground select-none">$</span>
              <span className="w-2 h-4 bg-foreground animate-terminal-cursor" />
            </div>
          )}
        </div>
      </div>
    )
  }
)
Terminal.displayName = "Terminal"

export { Terminal }
export type { TerminalProps, TerminalLine }
