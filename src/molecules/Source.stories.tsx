import type { Meta, StoryObj } from "@storybook/react"
import { Source, SourceTrigger, SourceContent } from "./Source"

const meta: Meta<typeof Source> = {
  title: "Molecules/Source",
  component: Source,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Source href="https://github.com">
      <SourceTrigger />
      <SourceContent
        title="GitHub: Let's build from here"
        description="GitHub is where over 100 million developers shape the future of software."
      />
    </Source>
  ),
}

export const WithFavicon: Story = {
  render: () => (
    <Source href="https://github.com">
      <SourceTrigger showFavicon />
      <SourceContent
        title="GitHub: Let's build from here"
        description="GitHub is where over 100 million developers shape the future of software."
      />
    </Source>
  ),
}

export const NumberedLabel: Story = {
  render: () => (
    <div className="flex gap-2">
      <Source href="https://github.com">
        <SourceTrigger label={1} />
        <SourceContent
          title="GitHub"
          description="GitHub is where over 100 million developers shape the future of software."
        />
      </Source>
      <Source href="https://vercel.com">
        <SourceTrigger label={2} />
        <SourceContent
          title="Vercel"
          description="Develop. Preview. Ship."
        />
      </Source>
      <Source href="https://react.dev">
        <SourceTrigger label={3} />
        <SourceContent
          title="React"
          description="The library for web and native user interfaces."
        />
      </Source>
    </div>
  ),
}
