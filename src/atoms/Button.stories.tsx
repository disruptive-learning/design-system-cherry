import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"
import { Icon } from "./Icon"

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: "Button" },
}

export const Destructive: Story = {
  args: { children: "Delete", variant: "destructive" },
}

export const Outline: Story = {
  args: { children: "Outline", variant: "outline" },
}

export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" },
}

export const Ghost: Story = {
  args: { children: "Ghost", variant: "ghost" },
}

export const Link: Story = {
  args: { children: "Link", variant: "link" },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const IconButtons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="icon-xs" variant="outline">
        <Icon name="chevron-right" size="sm" />
      </Button>
      <Button size="icon-sm" variant="outline">
        <Icon name="chevron-right" size="sm" />
      </Button>
      <Button size="icon" variant="outline">
        <Icon name="chevron-right" size="md" />
      </Button>
      <Button size="icon-lg" variant="outline">
        <Icon name="chevron-right" size="lg" />
      </Button>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button>
        <Icon name="arrow-right" size="sm" />
        Next
      </Button>
      <Button variant="outline">
        Learn More
        <Icon name="chevron-right" size="sm" />
      </Button>
    </div>
  ),
}

export const Loading: Story = {
  args: { children: "Processing", loading: true },
}

export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
}

export const AsChild: Story = {
  render: () => (
    <Button asChild>
      <a href="https://example.com">Link as Button</a>
    </Button>
  ),
}

export const CherryStyle: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button size="lg">Join Waitlist</Button>
      <Button variant="outline" size="lg">Learn More</Button>
    </div>
  ),
  name: "Cherry Style (Landing)",
}

export const Shimmer: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button size="lg" className="relative overflow-hidden">
        <span className="relative z-10">Get Started</span>
        <span className="absolute inset-0 -translate-x-full animate-shimmer-slide bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </Button>
      <Button variant="outline" size="lg" className="relative overflow-hidden">
        <span className="relative z-10">Learn More</span>
        <span className="absolute inset-0 -translate-x-full animate-shimmer-slide bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      </Button>
    </div>
  ),
  name: "Shimmer Effect",
}
