"use client"

import { Avatar, AvatarFallback, AvatarImage, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/atoms"
import { cn } from "@/lib/utils"

export type MessageProps = {
  children: React.ReactNode
  className?: string
} & React.HTMLProps<HTMLDivElement>

function Message({ children, className, ...props }: MessageProps) {
  return (
    <div className={cn("flex items-start gap-3", className)} {...props}>
      {children}
    </div>
  )
}

export type MessageAvatarProps = {
  src: string
  alt: string
  fallback?: string
  delayMs?: number
  className?: string
}

function MessageAvatar({
  src,
  alt,
  fallback,
  delayMs,
  className,
}: MessageAvatarProps) {
  return (
    <Avatar className={cn("h-8 w-8 shrink-0", className)}>
      <AvatarImage src={src} alt={alt} />
      {fallback && (
        <AvatarFallback delayMs={delayMs}>{fallback}</AvatarFallback>
      )}
    </Avatar>
  )
}

export type MessageContentProps = {
  children: React.ReactNode
  className?: string
} & React.HTMLProps<HTMLDivElement>

function MessageContent({
  children,
  className,
  ...props
}: MessageContentProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-3 text-foreground bg-secondary text-sm break-words",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export type MessageActionsProps = {
  children: React.ReactNode
  className?: string
} & React.HTMLProps<HTMLDivElement>

function MessageActions({
  children,
  className,
  ...props
}: MessageActionsProps) {
  return (
    <div
      className={cn("text-muted-foreground flex items-center gap-2", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export type MessageActionProps = {
  className?: string
  tooltip: React.ReactNode
  children: React.ReactNode
  side?: "top" | "bottom" | "left" | "right"
} & React.ComponentProps<typeof Tooltip>

function MessageAction({
  tooltip,
  children,
  className,
  side = "top",
  ...props
}: MessageActionProps) {
  return (
    <TooltipProvider>
      <Tooltip {...props}>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent side={side} className={className}>
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export { Message, MessageAvatar, MessageContent, MessageActions, MessageAction }
