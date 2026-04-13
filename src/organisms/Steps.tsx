"use client"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/atoms"
import { cn } from "@/lib/utils"
import { IconChevronDown } from "@tabler/icons-react"

export type StepsItemProps = React.ComponentProps<"div">

function StepsItem({
  children,
  className,
  ...props
}: StepsItemProps) {
  return (
    <div className={cn("text-muted-foreground text-sm", className)} {...props}>
      {children}
    </div>
  )
}

export type StepsTriggerProps = React.ComponentProps<
  typeof CollapsibleTrigger
> & {
  leftIcon?: React.ReactNode
  swapIconOnHover?: boolean
}

function StepsTrigger({
  children,
  className,
  leftIcon,
  swapIconOnHover = true,
  ...props
}: StepsTriggerProps) {
  return (
    <CollapsibleTrigger
      className={cn(
        "group text-muted-foreground hover:text-foreground flex w-full cursor-pointer items-center justify-start gap-1 text-sm font-mono font-normal transition-colors",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        {leftIcon ? (
          <span className="relative inline-flex size-4 items-center justify-center">
            <span
              className={cn(
                "transition-opacity",
                swapIconOnHover && "group-hover:opacity-0"
              )}
            >
              {leftIcon}
            </span>
            {swapIconOnHover && (
              <IconChevronDown className="absolute size-4 opacity-0 transition-opacity group-hover:opacity-100 group-data-[state=open]:rotate-180" />
            )}
          </span>
        ) : null}
        <span>{children}</span>
      </div>
      {!leftIcon && (
        <IconChevronDown className="size-4 transition-transform group-data-[state=open]:rotate-180" />
      )}
    </CollapsibleTrigger>
  )
}

export type StepsContentProps = React.ComponentProps<
  typeof CollapsibleContent
> & {
  bar?: React.ReactNode
}

function StepsContent({
  children,
  className,
  bar,
  ...props
}: StepsContentProps) {
  return (
    <CollapsibleContent
      className={cn(
        "text-popover-foreground data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="mt-3 grid max-w-full min-w-0 grid-cols-[min-content_minmax(0,1fr)] items-start gap-x-3">
        <div className="min-w-0 self-stretch">{bar ?? <StepsBar />}</div>
        <div className="min-w-0 space-y-2">{children}</div>
      </div>
    </CollapsibleContent>
  )
}

export type StepsBarProps = React.HTMLAttributes<HTMLDivElement>

function StepsBar({ className, ...props }: StepsBarProps) {
  return (
    <div
      className={cn("bg-muted h-full w-[2px]", className)}
      aria-hidden
      {...props}
    />
  )
}

export type StepsProps = React.ComponentProps<typeof Collapsible>

function Steps({ defaultOpen = true, className, ...props }: StepsProps) {
  return (
    <Collapsible
      className={cn(className)}
      defaultOpen={defaultOpen}
      {...props}
    />
  )
}

export { Steps, StepsTrigger, StepsContent, StepsItem, StepsBar }
