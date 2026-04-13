import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { Orb } from "./Orb"
import { Button } from "./Button"

const meta: Meta<typeof Orb> = {
  title: "Atoms/Orb",
  component: Orb,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
  argTypes: {
    active: {
      control: "boolean",
    },
    intensity: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    active: false,
    intensity: 0.5,
    size: "md",
  },
}

export const Active: Story = {
  args: {
    active: true,
    intensity: 0.5,
    size: "md",
  },
}

export const HighIntensity: Story = {
  args: {
    active: true,
    intensity: 1,
    size: "md",
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Orb size="sm" />
        <span className="text-xs text-muted-foreground font-mono">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Orb size="md" />
        <span className="text-xs text-muted-foreground font-mono">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Orb size="lg" />
        <span className="text-xs text-muted-foreground font-mono">Large</span>
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [isActive, setIsActive] = React.useState(false)

    return (
      <div className="flex flex-col items-center gap-6">
        <Orb
          active={isActive}
          intensity={0.6}
          size="lg"
          onClick={() => setIsActive(!isActive)}
        />
        <p className="text-sm text-muted-foreground font-sans">
          Click the orb to {isActive ? "deactivate" : "activate"}
        </p>
      </div>
    )
  },
}

export const WithControls: Story = {
  render: () => {
    const [isActive, setIsActive] = React.useState(false)
    const [intensity, setIntensity] = React.useState(0.5)

    return (
      <div className="flex flex-col items-center gap-6">
        <Orb active={isActive} intensity={intensity} size="lg" />
        <div className="flex items-center gap-4">
          <Button
            variant={isActive ? "default" : "outline"}
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? "Stop" : "Start"}
          </Button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={intensity}
            onChange={(e) => setIntensity(parseFloat(e.target.value))}
            className="w-32"
          />
          <span className="text-sm font-mono text-muted-foreground">
            {intensity.toFixed(1)}
          </span>
        </div>
      </div>
    )
  },
}
