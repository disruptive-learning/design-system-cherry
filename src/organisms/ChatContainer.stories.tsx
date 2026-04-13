import type { Meta, StoryObj } from "@storybook/react"
import { ChatContainerRoot, ChatContainerContent, ChatContainerScrollAnchor } from "./ChatContainer"

const meta: Meta<typeof ChatContainerRoot> = {
  title: "Organisms/ChatContainer",
  component: ChatContainerRoot,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

const messages = [
  { role: "user", content: "Hello! Can you help me with React?" },
  { role: "assistant", content: "Of course! I'd be happy to help you with React. What would you like to know?" },
  { role: "user", content: "What are React hooks?" },
  { role: "assistant", content: "React hooks are functions that let you use state and other React features in functional components." },
  { role: "user", content: "Can you show me an example?" },
  { role: "assistant", content: "Sure! useState is the most common hook. It lets you add state to a functional component." },
]

export const Default: Story = {
  render: () => (
    <ChatContainerRoot className="h-[400px] w-[500px] border rounded-lg">
      <ChatContainerContent className="p-4 gap-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-lg p-3 max-w-[80%] text-sm ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <ChatContainerScrollAnchor />
      </ChatContainerContent>
    </ChatContainerRoot>
  ),
}

export const Empty: Story = {
  render: () => (
    <ChatContainerRoot className="h-[300px] w-[500px] border rounded-lg">
      <ChatContainerContent className="p-4 items-center justify-center">
        <p className="text-muted-foreground font-mono">Start a conversation...</p>
      </ChatContainerContent>
    </ChatContainerRoot>
  ),
}

export const LongConversation: Story = {
  render: () => {
    const longMessages = Array.from({ length: 20 }, (_, i) => ({
      role: i % 2 === 0 ? "user" : "assistant",
      content: `Message ${i + 1}: This is a sample message to demonstrate scrolling behavior in the chat container.`,
    }))

    return (
      <ChatContainerRoot className="h-[400px] w-[500px] border rounded-lg">
        <ChatContainerContent className="p-4 gap-3">
          {longMessages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`rounded-lg p-3 max-w-[80%] text-sm ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          <ChatContainerScrollAnchor />
        </ChatContainerContent>
      </ChatContainerRoot>
    )
  },
}
