import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./Badge"

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: "New" },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
}

export const ProductLabels: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge size="sm">AI Powered</Badge>
      <Badge size="sm" variant="secondary">Free Trial</Badge>
      <Badge size="sm" variant="outline">Enterprise</Badge>
    </div>
  ),
}
