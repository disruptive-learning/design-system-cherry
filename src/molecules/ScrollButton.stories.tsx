import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/atoms"
import { IconChevronDown } from "@tabler/icons-react"

const meta: Meta = {
  title: "Molecules/ScrollButton",
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj

// Note: ScrollButton requires StickToBottom context to work.
// This story shows the visual appearance.

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground font-mono">
        ScrollButton requires ChatContainer context.
        Here's the visual appearance:
      </p>
      <Button variant="outline" size="sm" className="h-10 w-10 rounded-full">
        <IconChevronDown className="size-5" />
      </Button>
    </div>
  ),
}

export const Hidden: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground font-mono">
        When at bottom, the button is hidden:
      </p>
      <Button
        variant="outline"
        size="sm"
        className="h-10 w-10 rounded-full opacity-0 translate-y-4 scale-95"
      >
        <IconChevronDown className="size-5" />
      </Button>
    </div>
  ),
}

export const Visible: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground font-mono">
        When not at bottom, the button is visible:
      </p>
      <Button
        variant="outline"
        size="sm"
        className="h-10 w-10 rounded-full opacity-100 translate-y-0 scale-100"
      >
        <IconChevronDown className="size-5" />
      </Button>
    </div>
  ),
}
