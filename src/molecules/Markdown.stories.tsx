import type { Meta, StoryObj } from "@storybook/react"
import { Markdown } from "./Markdown"

const meta: Meta<typeof Markdown> = {
  title: "Molecules/Markdown",
  component: Markdown,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Markdown className="max-w-md">
{`# Hello World

This is a **bold** and *italic* text.

## Features

- Item one
- Item two
- Item three

Here is some \`inline code\` in a sentence.`}
    </Markdown>
  ),
}

export const Simple: Story = {
  render: () => (
    <Markdown className="max-w-md">
      This is a simple paragraph with **bold** and *italic* text.
    </Markdown>
  ),
}

export const WithCode: Story = {
  render: () => (
    <Markdown className="max-w-lg">
{`Here's how to use React hooks:

\`\`\`jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
\`\`\`
`}
    </Markdown>
  ),
}

export const WithList: Story = {
  render: () => (
    <Markdown className="max-w-md">
{`## Shopping List

1. Apples
2. Bananas
3. Oranges

### Notes
- Buy organic if possible
- Check for ripeness`}
    </Markdown>
  ),
}
