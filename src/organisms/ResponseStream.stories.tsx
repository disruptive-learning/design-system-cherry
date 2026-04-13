import type { Meta, StoryObj } from "@storybook/react"
import { ResponseStream } from "./ResponseStream"

const meta: Meta<typeof ResponseStream> = {
  title: "Organisms/ResponseStream",
  component: ResponseStream,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

const sampleText = `Hello! I'm an AI assistant. I can help you with a variety of tasks including coding, writing, analysis, and more. How can I assist you today?`

export const Typewriter: Story = {
  args: {
    textStream: sampleText,
    mode: "typewriter",
    speed: 50,
    className: "max-w-md text-sm",
  },
}

export const Fade: Story = {
  args: {
    textStream: sampleText,
    mode: "fade",
    speed: 30,
    className: "max-w-md text-sm",
  },
}

export const Fast: Story = {
  args: {
    textStream: sampleText,
    mode: "typewriter",
    speed: 100,
    className: "max-w-md text-sm",
  },
}

export const Slow: Story = {
  args: {
    textStream: sampleText,
    mode: "typewriter",
    speed: 10,
    className: "max-w-md text-sm",
  },
}
