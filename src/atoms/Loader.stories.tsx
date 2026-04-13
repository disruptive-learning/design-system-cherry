import type { Meta, StoryObj } from "@storybook/react"
import { Loader } from "./Loader"
import { Badge } from "./Badge"

const meta: Meta<typeof Loader> = {
  title: "Atoms/Loader",
  component: Loader,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "circular",
        "classic",
        "pulse",
        "pulse-dot",
        "dots",
        "typing",
        "wave",
        "bars",
        "terminal",
        "text-blink",
        "text-shimmer",
        "loading-dots",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "classic",
    size: "md",
  },
}

export const Circular: Story = {
  args: {
    variant: "circular",
    size: "md",
  },
}

export const Pulse: Story = {
  args: {
    variant: "pulse",
    size: "md",
  },
}

export const PulseDot: Story = {
  args: {
    variant: "pulse-dot",
    size: "md",
  },
}

export const Dots: Story = {
  args: {
    variant: "dots",
    size: "md",
  },
}

export const Typing: Story = {
  args: {
    variant: "typing",
    size: "md",
  },
}

export const Wave: Story = {
  args: {
    variant: "wave",
    size: "md",
  },
}

export const Bars: Story = {
  args: {
    variant: "bars",
    size: "md",
  },
}

export const Terminal: Story = {
  args: {
    variant: "terminal",
    size: "md",
  },
}

export const TextBlink: Story = {
  args: {
    variant: "text-blink",
    text: "Thinking",
    size: "md",
  },
}

export const TextShimmer: Story = {
  args: {
    variant: "text-shimmer",
    text: "Processing",
    size: "md",
  },
}

export const LoadingDots: Story = {
  args: {
    variant: "loading-dots",
    text: "Loading",
    size: "md",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm text-muted-foreground">Circular</span>
        <Loader variant="circular" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm text-muted-foreground">Classic</span>
        <Loader variant="classic" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm text-muted-foreground">Pulse</span>
        <Loader variant="pulse" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm text-muted-foreground">Pulse Dot</span>
        <Loader variant="pulse-dot" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm text-muted-foreground">Dots</span>
        <Loader variant="dots" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm text-muted-foreground">Typing</span>
        <Loader variant="typing" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm text-muted-foreground">Wave</span>
        <Loader variant="wave" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm text-muted-foreground">Bars</span>
        <Loader variant="bars" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm text-muted-foreground">Terminal</span>
        <Loader variant="terminal" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm text-muted-foreground">Text Blink</span>
        <Loader variant="text-blink" text="Thinking" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm text-muted-foreground">Text Shimmer</span>
        <Loader variant="text-shimmer" text="Processing" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm text-muted-foreground">Loading Dots</span>
        <Loader variant="loading-dots" text="Loading" />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Loader variant="classic" size="sm" />
        <span className="text-xs text-muted-foreground">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Loader variant="classic" size="md" />
        <span className="text-xs text-muted-foreground">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Loader variant="classic" size="lg" />
        <span className="text-xs text-muted-foreground">Large</span>
      </div>
    </div>
  ),
}

export const InBadge: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge>
        <Loader variant="classic" size="sm" className="[&_div]:bg-primary-foreground scale-75" />
        Processing
      </Badge>
      <Badge variant="outline">
        <Loader variant="classic" size="sm" className="scale-75" />
        Syncing
      </Badge>
    </div>
  ),
}
