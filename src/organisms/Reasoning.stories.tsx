import type { Meta, StoryObj } from "@storybook/react"
import { Reasoning, ReasoningTrigger, ReasoningContent } from "./Reasoning"

const meta: Meta<typeof Reasoning> = {
  title: "Organisms/Reasoning",
  component: Reasoning,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Reasoning>
        <ReasoningTrigger>View reasoning</ReasoningTrigger>
        <ReasoningContent>
          <p>First, I analyzed the user's question to understand what they're asking about.</p>
          <p>Then, I considered multiple approaches to solve this problem.</p>
          <p>Finally, I chose the most efficient solution based on the constraints.</p>
        </ReasoningContent>
      </Reasoning>
    </div>
  ),
}

export const WithMarkdown: Story = {
  render: () => (
    <div className="w-[400px]">
      <Reasoning>
        <ReasoningTrigger>Show thought process</ReasoningTrigger>
        <ReasoningContent markdown>
          {`**Step 1:** Analyze the input data

**Step 2:** Consider edge cases:
- Empty input
- Invalid format
- Large datasets

**Step 3:** Implement the solution`}
        </ReasoningContent>
      </Reasoning>
    </div>
  ),
}

export const OpenByDefault: Story = {
  render: () => (
    <div className="w-[400px]">
      <Reasoning open>
        <ReasoningTrigger>Reasoning (expanded)</ReasoningTrigger>
        <ReasoningContent>
          <p>This reasoning section is open by default.</p>
          <p>Users can collapse it by clicking the trigger.</p>
        </ReasoningContent>
      </Reasoning>
    </div>
  ),
}

export const Streaming: Story = {
  render: () => (
    <div className="w-[400px]">
      <Reasoning isStreaming>
        <ReasoningTrigger>Thinking...</ReasoningTrigger>
        <ReasoningContent>
          <p>Processing the request...</p>
          <p>Analyzing context...</p>
        </ReasoningContent>
      </Reasoning>
    </div>
  ),
}
