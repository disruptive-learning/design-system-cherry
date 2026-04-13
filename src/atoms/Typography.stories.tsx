import type { Meta, StoryObj } from "@storybook/react"
import { Heading, Subtitle, Text, Code } from "./Typography"

const meta: Meta<typeof Heading> = {
  title: "Atoms/Typography",
  component: Heading,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const HeadingDefault: Story = {
  args: { children: "Everything. Automated.", size: "3xl" },
}

export const HeadingSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Heading size="4xl">Heading 4XL</Heading>
      <Heading size="3xl">Heading 3XL</Heading>
      <Heading size="2xl">Heading 2XL</Heading>
      <Heading size="xl">Heading XL</Heading>
      <Heading size="lg">Heading LG</Heading>
      <Heading size="md">Heading MD</Heading>
      <Heading size="sm">Heading SM</Heading>
    </div>
  ),
}

export const HeadingWeights: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Heading size="xl" weight="light">Light (300)</Heading>
      <Heading size="xl" weight="normal">Normal (400)</Heading>
      <Heading size="xl" weight="medium">Medium (500)</Heading>
      <Heading size="xl" weight="semibold">Semibold (600)</Heading>
    </div>
  ),
}

export const SubtitleDefault: Story = {
  render: () => <Subtitle size="lg">That's all we need.</Subtitle>,
  name: "Subtitle",
}

export const TextDefault: Story = {
  render: () => (
    <Text className="max-w-md">
      Drop any fiscal document. Cherry extracts your entire fiscal identity and starts working.
    </Text>
  ),
  name: "Text",
}

export const TextVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Text variant="default">Default text color</Text>
      <Text variant="muted">Muted text color</Text>
      <Text variant="subtle">Subtle text color</Text>
    </div>
  ),
}

export const TextMono: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Text>Geist Sans (default)</Text>
      <Text mono>Geist Mono (technical)</Text>
    </div>
  ),
}

export const CodeInline: Story = {
  render: () => (
    <Text>
      Install with <Code>npm install cherry-ai</Code>
    </Text>
  ),
}

export const CodeBlock: Story = {
  render: () => (
    <Code block>
{`import { Cherry } from 'cherry-ai'

const client = new Cherry({
  apiKey: process.env.CHERRY_API_KEY
})`}
    </Code>
  ),
}

export const TypographyHierarchy: Story = {
  render: () => (
    <div className="flex flex-col gap-2 max-w-lg">
      <Heading size="3xl">Main Heading</Heading>
      <Subtitle size="lg">Supporting subtitle</Subtitle>
      <Text variant="muted" className="mt-2">
        Body text provides more details. Uses Geist Sans for readability.
      </Text>
    </div>
  ),
}
