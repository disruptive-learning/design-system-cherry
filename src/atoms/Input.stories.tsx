import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./Input"
import { Label } from "./Label"
import { Button } from "./Button"
import { IconUpload } from "@tabler/icons-react"

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
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
    placeholder: "Email",
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="email-2">Email</Label>
      <Input type="email" id="email-2" placeholder="Email" />
      <p className="text-sm text-muted-foreground">
        Enter your email address.
      </p>
    </div>
  ),
}

export const File: Story = {
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="file">Document</Label>
      <div className="flex h-9 items-center gap-3 rounded-md border border-input bg-background pl-1 pr-3">
        <Label
          htmlFor="file"
          className="flex h-7 shrink-0 cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-3 text-sm font-mono hover:bg-accent"
        >
          <IconUpload className="size-4" />
          Browse
        </Label>
        <Input id="file" type="file" className="sr-only" />
        <span className="text-sm text-muted-foreground">
          Upload up to 5 files, each with a max size of 2MB.
        </span>
      </div>
    </div>
  ),
}

export const FileDragDrop: Story = {
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="grid w-full gap-3">
      <Label>Company Filing</Label>
      <Label
        htmlFor="dropzone"
        className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-muted-foreground/25 bg-background py-8 hover:border-muted-foreground/50"
      >
        <div className="flex size-12 items-center justify-center rounded-lg border border-input bg-background">
          <IconUpload className="size-5 text-muted-foreground" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm font-medium">
            Drag and drop files here
          </span>
          <span className="text-sm text-muted-foreground font-sans">
            PDF, PNG or DOCX (max. 10 MB)
          </span>
        </div>
        <Input id="dropzone" type="file" className="sr-only" multiple />
      </Label>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    placeholder: "Email",
    disabled: true,
  },
}

export const Invalid: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="email-3">Email</Label>
      <Input
        type="email"
        id="email-3"
        placeholder="Email"
        aria-invalid="true"
        className="border-destructive focus-visible:ring-destructive"
      />
      <p className="text-sm text-destructive">
        Please enter a valid email address.
      </p>
    </div>
  ),
}

export const WithButton: Story = {
  render: () => (
    <div className="flex w-full gap-2">
      <Input type="email" placeholder="Email" />
      <Button>Subscribe</Button>
    </div>
  ),
}

export const Required: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="name">
        Name <span className="text-destructive">*</span>
      </Label>
      <Input type="text" id="name" placeholder="Enter your name" required />
    </div>
  ),
}

