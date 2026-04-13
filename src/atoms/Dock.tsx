import * as React from "react"
import { cn } from "@/lib/utils"

interface DockItemProps {
  icon: React.ReactNode
  label?: string
  onClick?: () => void
  className?: string
}

const DockItem = React.forwardRef<HTMLButtonElement, DockItemProps>(
  ({ icon, label, onClick, className }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          "group relative flex items-center justify-center",
          "w-12 h-12 rounded-xl bg-muted/80 backdrop-blur-sm",
          "transition-all duration-300 ease-out",
          "hover:scale-150 hover:bg-muted",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          className
        )}
      >
        <div className="transition-transform duration-300 group-hover:scale-75">
          {icon}
        </div>
        {label && (
          <span
            className={cn(
              "absolute -top-10 left-1/2 -translate-x-1/2",
              "px-2 py-1 rounded-md bg-foreground text-background text-xs font-mono",
              "opacity-0 scale-90 transition-all duration-200",
              "group-hover:opacity-100 group-hover:scale-100",
              "whitespace-nowrap pointer-events-none"
            )}
          >
            {label}
          </span>
        )}
      </button>
    )
  }
)
DockItem.displayName = "DockItem"

interface DockProps {
  children: React.ReactNode
  className?: string
  position?: "bottom" | "left" | "right"
}

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ children, className, position = "bottom" }, ref) => {
    const positionClasses = {
      bottom: "flex-row",
      left: "flex-col",
      right: "flex-col",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-end gap-2 p-2",
          "rounded-2xl border bg-background/80 backdrop-blur-md shadow-lg",
          positionClasses[position],
          className
        )}
      >
        {children}
      </div>
    )
  }
)
Dock.displayName = "Dock"

export { Dock, DockItem }
export type { DockProps, DockItemProps }
