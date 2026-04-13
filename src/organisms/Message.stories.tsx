import type { Meta, StoryObj } from "@storybook/react"
import { Message, MessageAvatar, MessageContent, MessageActions, MessageAction } from "./Message"
import { Button } from "@/atoms"
import { IconCopy, IconThumbUp, IconThumbDown } from "@tabler/icons-react"

const meta: Meta<typeof Message> = {
  title: "Organisms/Message",
  component: Message,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const UserMessage: Story = {
  render: () => (
    <Message className="max-w-md">
      <MessageAvatar
        src="https://github.com/shadcn.png"
        alt="User"
        fallback="U"
      />
      <MessageContent>
        Can you explain how React hooks work?
      </MessageContent>
    </Message>
  ),
}

export const AssistantMessage: Story = {
  render: () => (
    <Message className="max-w-md">
      <MessageAvatar
        src="https://github.com/vercel.png"
        alt="Assistant"
        fallback="AI"
      />
      <MessageContent>
        React hooks are functions that let you use state and other React features in functional components. The most common hooks are useState, useEffect, and useContext.
      </MessageContent>
    </Message>
  ),
}

export const WithActions: Story = {
  render: () => (
    <div className="max-w-md space-y-2">
      <Message>
        <MessageAvatar
          src="https://github.com/vercel.png"
          alt="Assistant"
          fallback="AI"
        />
        <MessageContent>
          Here's the code you requested.
        </MessageContent>
      </Message>
      <MessageActions className="ml-11">
        <MessageAction tooltip="Copy">
          <Button variant="ghost" size="sm">
            <IconCopy className="size-4" />
          </Button>
        </MessageAction>
        <MessageAction tooltip="Like">
          <Button variant="ghost" size="sm">
            <IconThumbUp className="size-4" />
          </Button>
        </MessageAction>
        <MessageAction tooltip="Dislike">
          <Button variant="ghost" size="sm">
            <IconThumbDown className="size-4" />
          </Button>
        </MessageAction>
      </MessageActions>
    </div>
  ),
}

export const Conversation: Story = {
  render: () => (
    <div className="max-w-lg space-y-4">
      <Message>
        <MessageAvatar
          src="https://github.com/shadcn.png"
          alt="User"
          fallback="U"
        />
        <MessageContent className="bg-primary text-primary-foreground">
          What is TypeScript?
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar
          src="https://github.com/vercel.png"
          alt="Assistant"
          fallback="AI"
        />
        <MessageContent>
          TypeScript is a strongly typed programming language that builds on JavaScript. It adds optional static typing and class-based object-oriented programming to the language.
        </MessageContent>
      </Message>
    </div>
  ),
}

export const DifferentStyles: Story = {
  render: () => (
    <div className="max-w-lg space-y-4">
      <Message>
        <MessageAvatar
          src="https://github.com/shadcn.png"
          alt="User"
          fallback="U"
        />
        <MessageContent className="bg-primary text-primary-foreground">
          User message with primary background
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar
          src="https://github.com/vercel.png"
          alt="AI"
          fallback="AI"
        />
        <MessageContent className="bg-muted">
          Assistant message with muted background
        </MessageContent>
      </Message>
    </div>
  ),
}
