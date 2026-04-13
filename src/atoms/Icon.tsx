import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export type IconName =
  | "document"
  | "globe"
  | "lightning"
  | "clock"
  | "card"
  | "moon"
  | "check"
  | "arrow-right"
  | "chevron-right"

const iconVariants = cva(
  "inline-block shrink-0",
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
        xl: "w-10 h-10",
      },
      color: {
        inherit: "",
        default: "text-gray-900 dark:text-gray-100",
        muted: "text-gray-600 dark:text-gray-400",
        subtle: "text-gray-400 dark:text-gray-500",
        green: "text-green-500",
      },
    },
    defaultVariants: {
      size: "md",
      color: "inherit",
    },
  }
)

const icons: Record<IconName, React.ReactNode> = {
  document: (
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  lightning: (
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  card: (
    <>
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </>
  ),
  moon: (
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  ),
  check: (
    <polyline points="20 6 9 17 4 12" />
  ),
  "arrow-right": (
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </>
  ),
  "chevron-right": (
    <polyline points="9 18 15 12 9 6" />
  ),
}

export interface IconProps
  extends React.SVGAttributes<SVGElement>,
    VariantProps<typeof iconVariants> {
  name: IconName
  color?: "inherit" | "default" | "muted" | "subtle" | "green"
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, name, size, color, ...props }, ref) => (
    <svg
      ref={ref}
      className={cn(iconVariants({ size, color, className }))}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {icons[name]}
    </svg>
  )
)
Icon.displayName = "Icon"

export { Icon, iconVariants }
