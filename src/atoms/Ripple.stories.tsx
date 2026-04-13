import type { Meta, StoryObj } from "@storybook/react"
import { Ripple } from "./Ripple"

const meta: Meta<typeof Ripple> = {
  title: "Atoms/Ripple",
  component: Ripple,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
  decorators: [
    (Story) => (
      <div className="relative w-96 h-96 overflow-hidden rounded-xl border bg-background">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    mainCircleSize: 210,
    mainCircleOpacity: 0.24,
    numCircles: 8,
  },
}

export const Subtle: Story = {
  args: {
    mainCircleSize: 150,
    mainCircleOpacity: 0.15,
    numCircles: 5,
  },
}

export const Intense: Story = {
  args: {
    mainCircleSize: 100,
    mainCircleOpacity: 0.4,
    numCircles: 12,
  },
}

export const WithContent: Story = {
  render: () => (
    <div className="relative w-96 h-96 overflow-hidden rounded-xl border bg-background flex items-center justify-center">
      <Ripple />
      <div className="relative z-10 text-center">
        <h2 className="text-2xl font-mono">Cherry AI</h2>
        <p className="text-sm text-muted-foreground font-sans">Your AI companion</p>
      </div>
    </div>
  ),
}
