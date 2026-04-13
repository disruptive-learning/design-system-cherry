import type { Meta, StoryObj } from "@storybook/react"
import {
  ChainOfThought,
  ChainOfThoughtStep,
  ChainOfThoughtTrigger,
  ChainOfThoughtContent,
  ChainOfThoughtItem,
} from "./ChainOfThought"
import { IconBulb, IconSearch, IconCircleCheck } from "@tabler/icons-react"

const meta: Meta<typeof ChainOfThought> = {
  title: "Organisms/ChainOfThought",
  component: ChainOfThought,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <ChainOfThought>
        <ChainOfThoughtStep>
          <ChainOfThoughtTrigger leftIcon={<IconSearch className="size-4" />}>
            Searching for information
          </ChainOfThoughtTrigger>
          <ChainOfThoughtContent>
            <ChainOfThoughtItem>Found 5 relevant sources</ChainOfThoughtItem>
            <ChainOfThoughtItem>Analyzing content...</ChainOfThoughtItem>
          </ChainOfThoughtContent>
        </ChainOfThoughtStep>

        <ChainOfThoughtStep>
          <ChainOfThoughtTrigger leftIcon={<IconBulb className="size-4" />}>
            Processing results
          </ChainOfThoughtTrigger>
          <ChainOfThoughtContent>
            <ChainOfThoughtItem>Extracting key points</ChainOfThoughtItem>
            <ChainOfThoughtItem>Comparing sources</ChainOfThoughtItem>
          </ChainOfThoughtContent>
        </ChainOfThoughtStep>

        <ChainOfThoughtStep>
          <ChainOfThoughtTrigger leftIcon={<IconCircleCheck className="size-4" />}>
            Generating response
          </ChainOfThoughtTrigger>
          <ChainOfThoughtContent>
            <ChainOfThoughtItem>Formatting answer</ChainOfThoughtItem>
          </ChainOfThoughtContent>
        </ChainOfThoughtStep>
      </ChainOfThought>
    </div>
  ),
}

export const Simple: Story = {
  render: () => (
    <div className="w-[400px]">
      <ChainOfThought>
        <ChainOfThoughtStep>
          <ChainOfThoughtTrigger>Step 1: Analyze</ChainOfThoughtTrigger>
          <ChainOfThoughtContent>
            <ChainOfThoughtItem>Reading input data</ChainOfThoughtItem>
          </ChainOfThoughtContent>
        </ChainOfThoughtStep>

        <ChainOfThoughtStep>
          <ChainOfThoughtTrigger>Step 2: Process</ChainOfThoughtTrigger>
          <ChainOfThoughtContent>
            <ChainOfThoughtItem>Applying transformations</ChainOfThoughtItem>
          </ChainOfThoughtContent>
        </ChainOfThoughtStep>

        <ChainOfThoughtStep>
          <ChainOfThoughtTrigger>Step 3: Output</ChainOfThoughtTrigger>
          <ChainOfThoughtContent>
            <ChainOfThoughtItem>Generating result</ChainOfThoughtItem>
          </ChainOfThoughtContent>
        </ChainOfThoughtStep>
      </ChainOfThought>
    </div>
  ),
}

export const SingleStep: Story = {
  render: () => (
    <div className="w-[400px]">
      <ChainOfThought>
        <ChainOfThoughtStep>
          <ChainOfThoughtTrigger leftIcon={<IconBulb className="size-4" />}>
            Thinking about your question
          </ChainOfThoughtTrigger>
          <ChainOfThoughtContent>
            <ChainOfThoughtItem>
              This is a complex question that requires careful consideration.
            </ChainOfThoughtItem>
            <ChainOfThoughtItem>
              I need to analyze multiple factors before providing an answer.
            </ChainOfThoughtItem>
            <ChainOfThoughtItem>
              Let me break this down into smaller parts.
            </ChainOfThoughtItem>
          </ChainOfThoughtContent>
        </ChainOfThoughtStep>
      </ChainOfThought>
    </div>
  ),
}
