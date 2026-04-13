import type { Meta, StoryObj } from "@storybook/react"
import { IconBold, IconItalic, IconUnderline } from "@tabler/icons-react"
import { Toggle } from "./Toggle"

const meta: Meta<typeof Toggle> = {
  title: "Atoms/Toggle",
  component: Toggle,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <IconBold className="size-4" />
    </Toggle>
  ),
}

export const WithText: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
      <IconItalic className="size-4" />
      Italic
    </Toggle>
  ),
}

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Toggle underline">
      <IconUnderline className="size-4" />
    </Toggle>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle size="sm" aria-label="Toggle small">
        <IconBold className="size-4" />
      </Toggle>
      <Toggle size="default" aria-label="Toggle default">
        <IconBold className="size-4" />
      </Toggle>
      <Toggle size="lg" aria-label="Toggle large">
        <IconBold className="size-4" />
      </Toggle>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Toggle disabled aria-label="Toggle disabled">
      <IconBold className="size-4" />
    </Toggle>
  ),
}
