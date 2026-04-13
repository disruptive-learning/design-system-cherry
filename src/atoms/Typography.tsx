import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/* ============================================
   HEADING - Geist Mono (títulos destacados)
   ============================================ */
const headingVariants = cva(
  "font-mono tracking-wide text-gray-950 dark:text-gray-50",
  {
    variants: {
      size: {
        xs: "text-sm",
        sm: "text-base",
        md: "text-xl",
        lg: "text-2xl",
        xl: "text-3xl",
        "2xl": "text-4xl",
        "3xl": "text-5xl",
        "4xl": "text-6xl tracking-tight",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
      },
    },
    defaultVariants: {
      size: "lg",
      weight: "medium",
    },
  }
)

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as: Tag = "h2", size, weight, ...props }, ref) => (
    <Tag
      ref={ref}
      className={cn(headingVariants({ size, weight, className }))}
      {...props}
    />
  )
)
Heading.displayName = "Heading"

/* ============================================
   SUBTITLE - Geist Mono (subtítulos, muted)
   ============================================ */
const subtitleVariants = cva(
  "font-mono tracking-wide text-gray-500 dark:text-gray-400",
  {
    variants: {
      size: {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-2xl",
        xl: "text-3xl",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
)

export interface SubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof subtitleVariants> {}

const Subtitle = React.forwardRef<HTMLParagraphElement, SubtitleProps>(
  ({ className, size, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(subtitleVariants({ size, className }))}
      {...props}
    />
  )
)
Subtitle.displayName = "Subtitle"

/* ============================================
   TEXT - Geist Sans (párrafos legibles)
   ============================================ */
const textVariants = cva(
  "font-sans leading-relaxed",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      },
      variant: {
        default: "text-gray-900 dark:text-gray-100",
        muted: "text-gray-600 dark:text-gray-400",
        subtle: "text-gray-400 dark:text-gray-500",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
      weight: "normal",
    },
  }
)

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div"
  mono?: boolean
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, as: Tag = "p", size, variant, weight, mono, ...props }, ref) => (
    <Tag
      ref={ref}
      className={cn(
        textVariants({ size, variant, weight, className }),
        mono && "font-mono tracking-wide"
      )}
      {...props}
    />
  )
)
Text.displayName = "Text"

/* ============================================
   CODE - Geist Mono (código)
   ============================================ */
export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  block?: boolean
}

const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, block, children, ...props }, ref) => {
    if (block) {
      return (
        <pre
          ref={ref as React.Ref<HTMLPreElement>}
          className={cn(
            "font-mono text-sm bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md p-4 overflow-x-auto",
            className
          )}
          {...props}
        >
          <code>{children}</code>
        </pre>
      )
    }
    return (
      <code
        ref={ref}
        className={cn(
          "font-mono text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded",
          className
        )}
        {...props}
      >
        {children}
      </code>
    )
  }
)
Code.displayName = "Code"

export { Heading, headingVariants, Subtitle, subtitleVariants, Text, textVariants, Code }
