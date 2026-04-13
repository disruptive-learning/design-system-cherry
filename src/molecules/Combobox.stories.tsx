import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { Combobox } from "./Combobox"
import { Label } from "@/atoms/Label"

const meta: Meta<typeof Combobox> = {
  title: "Molecules/Combobox",
  component: Combobox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
  { value: "mx", label: "Mexico" },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState("")
    return (
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Select framework..."
        searchPlaceholder="Search framework..."
      />
    )
  },
}

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = React.useState("")
    return (
      <div className="grid gap-1.5">
        <Label>Framework</Label>
        <Combobox
          options={frameworks}
          value={value}
          onValueChange={setValue}
          placeholder="Select framework..."
        />
      </div>
    )
  },
}

export const Countries: Story = {
  render: () => {
    const [value, setValue] = React.useState("")
    return (
      <Combobox
        options={countries}
        value={value}
        onValueChange={setValue}
        placeholder="Select country..."
        searchPlaceholder="Search country..."
        className="w-[250px]"
      />
    )
  },
}

export const Preselected: Story = {
  render: () => {
    const [value, setValue] = React.useState("next")
    return (
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Select framework..."
      />
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <Combobox
      options={frameworks}
      placeholder="Select framework..."
      disabled
    />
  ),
}
