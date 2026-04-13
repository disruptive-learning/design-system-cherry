import type { Meta, StoryObj } from "@storybook/react"
import { FeedbackBar } from "./FeedbackBar"
import { IconBolt } from "@tabler/icons-react"

const meta: Meta<typeof FeedbackBar> = {
  title: "Molecules/FeedbackBar",
  component: FeedbackBar,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Was this response helpful?",
    onHelpful: () => console.log("Helpful clicked"),
    onNotHelpful: () => console.log("Not helpful clicked"),
    onClose: () => console.log("Close clicked"),
  },
}

export const WithIcon: Story = {
  args: {
    title: "Rate this response",
    icon: <IconBolt className="size-4 text-muted-foreground" />,
    onHelpful: () => console.log("Helpful clicked"),
    onNotHelpful: () => console.log("Not helpful clicked"),
    onClose: () => console.log("Close clicked"),
  },
}
