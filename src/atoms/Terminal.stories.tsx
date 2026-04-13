import type { Meta, StoryObj } from "@storybook/react"
import { Terminal } from "./Terminal"

const meta: Meta<typeof Terminal> = {
  title: "Atoms/Terminal",
  component: Terminal,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    lines: [
      { text: "npm install cherry-ai", type: "command" },
      { text: "Installing dependencies...", type: "output", delay: 500 },
      { text: "Successfully installed cherry-ai@1.0.0", type: "output", delay: 300 },
      { text: "cherry start", type: "command", delay: 500 },
      { text: "Cherry AI is running on http://localhost:3000", type: "output", delay: 300 },
    ],
    title: "Terminal",
  },
}

export const GitCommands: Story = {
  args: {
    lines: [
      { text: "git status", type: "command" },
      { text: "On branch main", type: "output", delay: 200 },
      { text: "Changes to be committed:", type: "output", delay: 100 },
      { text: "  modified: src/App.tsx", type: "output", delay: 100 },
      { text: "git commit -m 'feat: add new feature'", type: "command", delay: 500 },
      { text: "[main abc1234] feat: add new feature", type: "output", delay: 300 },
    ],
    title: "git",
  },
}

export const WithComments: Story = {
  args: {
    lines: [
      { text: "Install Cherry AI CLI", type: "comment" },
      { text: "npm install -g @cherry/cli", type: "command", delay: 300 },
      { text: "Initialize a new project", type: "comment", delay: 500 },
      { text: "cherry init my-project", type: "command", delay: 300 },
      { text: "Created my-project successfully!", type: "output", delay: 300 },
    ],
    title: "Setup Guide",
  },
}

export const FastTyping: Story = {
  args: {
    lines: [
      { text: "echo 'Hello, Cherry!'", type: "command" },
      { text: "Hello, Cherry!", type: "output", delay: 200 },
      { text: "date", type: "command", delay: 300 },
      { text: "Sun Apr 13 2026 17:00:00 GMT-0600", type: "output", delay: 100 },
    ],
    title: "bash",
    typingSpeed: 25,
  },
}

export const SlowTyping: Story = {
  args: {
    lines: [
      { text: "Initializing AI model...", type: "output" },
      { text: "Loading weights...", type: "output", delay: 1000 },
      { text: "Ready.", type: "output", delay: 500 },
    ],
    title: "Cherry AI",
    typingSpeed: 100,
  },
}
