import type { Meta, StoryObj } from "@storybook/react"
import { SystemMessage } from "./SystemMessage"
import { IconBolt } from "@tabler/icons-react"

const meta: Meta<typeof SystemMessage> = {
  title: "Organisms/SystemMessage",
  component: SystemMessage,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Action: Story = {
  args: {
    variant: "action",
    children: "Your session will expire in 5 minutes.",
  },
}

export const Error: Story = {
  args: {
    variant: "error",
    children: "Failed to send message. Please try again.",
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "You are approaching your usage limit.",
  },
}

export const Filled: Story = {
  args: {
    variant: "action",
    fill: true,
    children: "New features are available!",
  },
}

export const WithCTA: Story = {
  args: {
    variant: "action",
    children: "Upgrade to Pro for unlimited access.",
    cta: {
      label: "Upgrade",
      onClick: () => console.log("Upgrade clicked"),
    },
  },
}

export const CustomIcon: Story = {
  args: {
    variant: "action",
    fill: true,
    icon: <IconBolt className="size-4" />,
    children: "AI is ready to assist you.",
  },
}

export const NoIcon: Story = {
  args: {
    variant: "action",
    isIconHidden: true,
    children: "Simple message without icon.",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="w-[400px] space-y-3">
      <SystemMessage variant="action">
        Information message
      </SystemMessage>
      <SystemMessage variant="warning">
        Warning message
      </SystemMessage>
      <SystemMessage variant="error">
        Error message
      </SystemMessage>
      <SystemMessage variant="action" fill>
        Filled action message
      </SystemMessage>
      <SystemMessage variant="error" fill>
        Filled error message
      </SystemMessage>
    </div>
  ),
}
