import type { Meta, StoryObj } from "@storybook/react"
import { Switch } from "./Switch"
import { Label } from "./Label"

const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  component: Switch,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="flex items-start space-x-2">
      <Switch id="notifications" className="mt-0.5" />
      <div className="grid gap-0.5 leading-none">
        <Label htmlFor="notifications" className="font-medium">Enable notifications</Label>
        <p className="text-sm text-muted-foreground">
          Receive alerts when someone mentions you.
        </p>
      </div>
    </div>
  ),
}

export const SwitchList: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between space-x-2">
        <Label htmlFor="s1">Email notifications</Label>
        <Switch id="s1" defaultChecked />
      </div>
      <div className="flex items-center justify-between space-x-2">
        <Label htmlFor="s2">Push notifications</Label>
        <Switch id="s2" />
      </div>
      <div className="flex items-center justify-between space-x-2">
        <Label htmlFor="s3">SMS notifications</Label>
        <Switch id="s3" />
      </div>
    </div>
  ),
}
