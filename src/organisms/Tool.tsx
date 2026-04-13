"use client"

import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/atoms"
import { cn } from "@/lib/utils"
import {
  IconCircleCheck,
  IconChevronDown,
  IconSettings,
  IconCircleX,
} from "@tabler/icons-react"
import { Loader } from "@/atoms"
import { useState } from "react"

export type ToolPart = {
  type: string
  state:
    | "input-streaming"
    | "input-available"
    | "output-available"
    | "output-error"
  input?: Record<string, unknown>
  output?: Record<string, unknown>
  toolCallId?: string
  errorText?: string
}

export type ToolProps = {
  toolPart: ToolPart
  defaultOpen?: boolean
  className?: string
}

function Tool({ toolPart, defaultOpen = false, className }: ToolProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const { state, input, output, toolCallId } = toolPart

  const getStateIcon = () => {
    switch (state) {
      case "input-streaming":
        return <Loader variant="circular" size="sm" />
      case "input-available":
        return <IconSettings className="size-4 text-muted-foreground" />
      case "output-available":
        return <IconCircleCheck className="size-4 text-muted-foreground" />
      case "output-error":
        return <IconCircleX className="size-4 text-destructive" />
      default:
        return <IconSettings className="size-4 text-muted-foreground" />
    }
  }

  const getStateBadge = () => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-mono font-normal"
    switch (state) {
      case "input-streaming":
        return (
          <span className={cn(baseClasses, "bg-muted text-muted-foreground")}>
            Processing
          </span>
        )
      case "input-available":
        return (
          <span className={cn(baseClasses, "bg-muted text-muted-foreground")}>
            Ready
          </span>
        )
      case "output-available":
        return (
          <span className={cn(baseClasses, "bg-muted text-foreground")}>
            Completed
          </span>
        )
      case "output-error":
        return (
          <span className={cn(baseClasses, "bg-destructive/10 text-destructive")}>
            Error
          </span>
        )
      default:
        return (
          <span className={cn(baseClasses, "bg-muted text-muted-foreground")}>
            Pending
          </span>
        )
    }
  }

  const formatValue = (value: unknown): string => {
    if (value === null) return "null"
    if (value === undefined) return "undefined"
    if (typeof value === "string") return value
    if (typeof value === "object") {
      return JSON.stringify(value, null, 2)
    }
    return String(value)
  }

  return (
    <div
      className={cn(
        "border-border mt-3 overflow-hidden rounded-lg border",
        className
      )}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="bg-background h-auto w-full justify-between rounded-b-none px-3 py-2 font-normal"
          >
            <div className="flex items-center gap-2">
              {getStateIcon()}
              <span className="font-mono text-sm font-normal">
                {toolPart.type}
              </span>
              {getStateBadge()}
            </div>
            <IconChevronDown className={cn("size-4", isOpen && "rotate-180")} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent
          className={cn(
            "border-border border-t",
            "data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden"
          )}
        >
          <div className="bg-background space-y-3 p-3">
            {input && Object.keys(input).length > 0 && (
              <div>
                <h4 className="text-muted-foreground mb-2 text-sm font-mono font-normal">
                  Input
                </h4>
                <div className="bg-muted rounded border p-2 font-mono text-sm">
                  {Object.entries(input).map(([key, value]) => (
                    <div key={key} className="mb-1">
                      <span className="text-muted-foreground">{key}:</span>{" "}
                      <span>{formatValue(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {output && (
              <div>
                <h4 className="text-muted-foreground mb-2 text-sm font-mono font-normal">
                  Output
                </h4>
                <div className="bg-muted max-h-60 overflow-auto rounded border p-2 font-mono text-sm">
                  <pre className="whitespace-pre-wrap">
                    {formatValue(output)}
                  </pre>
                </div>
              </div>
            )}

            {state === "output-error" && toolPart.errorText && (
              <div>
                <h4 className="mb-2 text-sm font-mono font-normal text-destructive">
                  Error
                </h4>
                <div className="bg-destructive/10 rounded border border-destructive/20 p-2 text-sm">
                  {toolPart.errorText}
                </div>
              </div>
            )}

            {state === "input-streaming" && (
              <div className="text-muted-foreground text-sm font-mono">
                Processing tool call...
              </div>
            )}

            {toolCallId && (
              <div className="text-muted-foreground border-t border-border pt-2 text-xs font-mono">
                Call ID: {toolCallId}
              </div>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export { Tool }
