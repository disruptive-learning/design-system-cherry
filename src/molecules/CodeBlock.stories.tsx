import type { Meta, StoryObj } from "@storybook/react"
import { CodeBlock, CodeBlockCode, CodeBlockGroup } from "./CodeBlock"
import { Button } from "@/atoms"
import { IconCopy } from "@tabler/icons-react"

const meta: Meta<typeof CodeBlock> = {
  title: "Molecules/CodeBlock",
  component: CodeBlock,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

const sampleCode = `function greet(name: string) {
  console.log(\`Hello, \${name}!\`)
}

greet("World")`

export const Default: Story = {
  render: () => (
    <CodeBlock className="w-[500px]">
      <CodeBlockCode code={sampleCode} language="typescript" />
    </CodeBlock>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <CodeBlock className="w-[500px]">
      <CodeBlockGroup className="border-b border-border px-4 py-2">
        <span className="text-sm font-mono text-muted-foreground">example.ts</span>
        <Button variant="ghost" size="sm">
          <IconCopy className="size-4" />
        </Button>
      </CodeBlockGroup>
      <CodeBlockCode code={sampleCode} language="typescript" />
    </CodeBlock>
  ),
}

export const JavaScript: Story = {
  render: () => (
    <CodeBlock className="w-[500px]">
      <CodeBlockCode
        code={`const add = (a, b) => a + b
console.log(add(2, 3))`}
        language="javascript"
      />
    </CodeBlock>
  ),
}

export const Python: Story = {
  render: () => (
    <CodeBlock className="w-[500px]">
      <CodeBlockCode
        code={`def greet(name):
    print(f"Hello, {name}!")

greet("World")`}
        language="python"
      />
    </CodeBlock>
  ),
}
