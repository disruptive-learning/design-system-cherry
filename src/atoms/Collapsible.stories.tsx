import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./Collapsible"
import { Button } from "./Button"
import { IconChevronDown } from "@tabler/icons-react"

const meta: Meta<typeof Collapsible> = {
  title: "Atoms/Collapsible",
  component: Collapsible,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-mono">Toggle Content</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <IconChevronDown
                className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 font-sans text-sm">
          Always visible content
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-sans text-sm">
            Hidden content 1
          </div>
          <div className="rounded-md border px-4 py-3 font-sans text-sm">
            Hidden content 2
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
}

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-mono">Expanded by Default</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <IconChevronDown className="size-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-sans text-sm">
          This content is visible by default
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}
