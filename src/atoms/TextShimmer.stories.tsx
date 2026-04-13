import type { Meta, StoryObj } from "@storybook/react"
import { TextShimmer } from "./TextShimmer"

const meta: Meta<typeof TextShimmer> = {
  title: "Atoms/TextShimmer",
  component: TextShimmer,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Thinking...",
  },
}

export const CustomDuration: Story = {
  args: {
    children: "Processing your request",
    duration: 2,
  },
}

export const WideSpread: Story = {
  args: {
    children: "Analyzing data",
    spread: 40,
  },
}

export const AsHeading: Story = {
  args: {
    as: "h2",
    children: "Loading Results",
    className: "text-2xl",
  },
}
