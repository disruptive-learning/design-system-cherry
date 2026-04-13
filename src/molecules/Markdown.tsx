"use client"

import { cn } from "@/lib/utils"
import { memo } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export type MarkdownProps = {
  children: string
  className?: string
}

function MarkdownComponent({
  children,
  className,
}: MarkdownProps) {
  return (
    <div className={cn("prose prose-sm dark:prose-invert max-w-none", className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children, ...props }) => (
            <h1 className="font-mono font-normal text-2xl mt-6 mb-4" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2 className="font-mono font-normal text-xl mt-5 mb-3" {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 className="font-mono font-normal text-lg mt-4 mb-2" {...props}>
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4 className="font-mono font-normal text-base mt-4 mb-2" {...props}>
              {children}
            </h4>
          ),
          strong: ({ children, ...props }) => (
            <strong className="font-medium" {...props}>
              {children}
            </strong>
          ),
          code: ({ className, children, ...props }) => {
            const isInline = !className
            if (isInline) {
              return (
                <code className="bg-muted rounded-sm px-1 py-0.5 font-mono text-sm" {...props}>
                  {children}
                </code>
              )
            }
            return (
              <code className={cn("font-mono", className)} {...props}>
                {children}
              </code>
            )
          },
          pre: ({ children }) => (
            <pre className="bg-muted text-foreground rounded-lg p-4 overflow-x-auto font-mono text-sm">
              {children}
            </pre>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}

const Markdown = memo(MarkdownComponent)
Markdown.displayName = "Markdown"

export { Markdown }
