import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { DatePicker } from "./DatePicker"
import { Label } from "@/atoms/Label"

const meta: Meta<typeof DatePicker> = {
  title: "Molecules/DatePicker",
  component: DatePicker,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date>()
    return <DatePicker date={date} onDateChange={setDate} />
  },
}

export const WithLabel: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date>()
    return (
      <div className="grid gap-1.5">
        <Label>Date of birth</Label>
        <DatePicker date={date} onDateChange={setDate} />
      </div>
    )
  },
}

export const Preselected: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date>(new Date())
    return <DatePicker date={date} onDateChange={setDate} />
  },
}

export const Disabled: Story = {
  render: () => (
    <DatePicker disabled placeholder="Pick a date" />
  ),
}
