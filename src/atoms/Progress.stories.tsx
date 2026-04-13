import type { Meta, StoryObj } from "@storybook/react"
import { Progress } from "./Progress"

const meta: Meta<typeof Progress> = {
  title: "Atoms/Progress",
  component: Progress,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 60,
  },
}

export const Empty: Story = {
  args: {
    value: 0,
  },
}

export const Half: Story = {
  args: {
    value: 50,
  },
}

export const Complete: Story = {
  args: {
    value: 100,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Progress</span>
        <span className="text-muted-foreground">75%</span>
      </div>
      <Progress value={75} />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Progress value={60} className="h-1" />
      <Progress value={60} className="h-2" />
      <Progress value={60} className="h-3" />
      <Progress value={60} className="h-4" />
    </div>
  ),
}

export const CustomColors: Story = {
  render: () => (
    <div className="space-y-4">
      <Progress value={60} />
      <Progress value={60} className="bg-green-100 [&>div]:bg-green-500" />
      <Progress value={60} className="bg-blue-100 [&>div]:bg-blue-500" />
      <Progress value={60} className="bg-orange-100 [&>div]:bg-orange-500" />
    </div>
  ),
}
