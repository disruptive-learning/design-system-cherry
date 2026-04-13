import type { Meta, StoryObj } from "@storybook/react"
import { PromptSuggestion } from "./PromptSuggestion"

const meta: Meta<typeof PromptSuggestion> = {
  title: "Molecules/PromptSuggestion",
  component: PromptSuggestion,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <PromptSuggestion onClick={() => console.log("clicked")}>
      Tell me a joke
    </PromptSuggestion>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <PromptSuggestion>Tell me a joke</PromptSuggestion>
      <PromptSuggestion>Write a poem</PromptSuggestion>
      <PromptSuggestion>Explain quantum physics</PromptSuggestion>
    </div>
  ),
}

export const WithHighlight: Story = {
  render: () => (
    <div className="w-[300px] space-y-1">
      <PromptSuggestion highlight="code">Write some code for me</PromptSuggestion>
      <PromptSuggestion highlight="code">Generate code examples</PromptSuggestion>
      <PromptSuggestion highlight="code">Code review my file</PromptSuggestion>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <PromptSuggestion size="sm">Small suggestion</PromptSuggestion>
      <PromptSuggestion size="default">Default suggestion</PromptSuggestion>
      <PromptSuggestion size="lg">Large suggestion</PromptSuggestion>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <PromptSuggestion variant="outline">Outline variant</PromptSuggestion>
      <PromptSuggestion variant="secondary">Secondary variant</PromptSuggestion>
      <PromptSuggestion variant="ghost">Ghost variant</PromptSuggestion>
    </div>
  ),
}
