import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { PromptInput, PromptInputTextarea, PromptInputActions, PromptInputAction } from "./PromptInput"
import { Button } from "@/atoms"
import { IconArrowUp, IconPaperclip, IconMicrophone } from "@tabler/icons-react"

const meta: Meta<typeof PromptInput> = {
  title: "Organisms/PromptInput",
  component: PromptInput,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState("")

    return (
      <PromptInput
        value={value}
        onValueChange={setValue}
        onSubmit={() => console.log("Submit:", value)}
        className="w-[500px]"
      >
        <PromptInputTextarea placeholder="Ask me anything..." />
        <PromptInputActions className="justify-end px-2 pb-2">
          <PromptInputAction tooltip="Send message">
            <Button size="sm" disabled={!value.trim()}>
              <IconArrowUp className="size-4" />
            </Button>
          </PromptInputAction>
        </PromptInputActions>
      </PromptInput>
    )
  },
}

export const WithAttachments: Story = {
  render: () => {
    const [value, setValue] = React.useState("")

    return (
      <PromptInput
        value={value}
        onValueChange={setValue}
        onSubmit={() => console.log("Submit:", value)}
        className="w-[500px]"
      >
        <PromptInputTextarea placeholder="Type your message..." />
        <PromptInputActions className="justify-between px-2 pb-2">
          <div className="flex gap-1">
            <PromptInputAction tooltip="Attach file">
              <Button variant="ghost" size="sm">
                <IconPaperclip className="size-4" />
              </Button>
            </PromptInputAction>
            <PromptInputAction tooltip="Voice input">
              <Button variant="ghost" size="sm">
                <IconMicrophone className="size-4" />
              </Button>
            </PromptInputAction>
          </div>
          <PromptInputAction tooltip="Send">
            <Button size="sm" disabled={!value.trim()}>
              <IconArrowUp className="size-4" />
            </Button>
          </PromptInputAction>
        </PromptInputActions>
      </PromptInput>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <PromptInput disabled className="w-[500px]">
      <PromptInputTextarea placeholder="Input is disabled..." />
      <PromptInputActions className="justify-end px-2 pb-2">
        <PromptInputAction tooltip="Send">
          <Button size="sm" disabled>
            <IconArrowUp className="size-4" />
          </Button>
        </PromptInputAction>
      </PromptInputActions>
    </PromptInput>
  ),
}

export const Loading: Story = {
  render: () => (
    <PromptInput isLoading className="w-[500px]">
      <PromptInputTextarea placeholder="Generating response..." />
      <PromptInputActions className="justify-end px-2 pb-2">
        <Button size="sm" variant="outline">
          Stop
        </Button>
      </PromptInputActions>
    </PromptInput>
  ),
}
