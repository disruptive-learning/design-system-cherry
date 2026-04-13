import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { Calendar } from "./Calendar"

const meta: Meta<typeof Calendar> = {
  title: "Molecules/Calendar",
  component: Calendar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    )
  },
}

export const Range: Story = {
  render: () => {
    const [range, setRange] = React.useState<{
      from: Date | undefined
      to: Date | undefined
    }>({
      from: undefined,
      to: undefined,
    })
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={(range) => setRange(range as any)}
        className="rounded-md border"
        numberOfMonths={2}
      />
    )
  },
}

export const Multiple: Story = {
  render: () => {
    const [dates, setDates] = React.useState<Date[] | undefined>([])
    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-md border"
      />
    )
  },
}
