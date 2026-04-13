import type { Meta, StoryObj } from "@storybook/react"
import {
  InputGroup,
  InputGroupInput,
  InputGroupTextarea,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
} from "./InputGroup"
import { IconSearch, IconMail, IconEye, IconEyeOff, IconCopy, IconSend } from "@tabler/icons-react"

const meta: Meta<typeof InputGroup> = {
  title: "Molecules/InputGroup",
  component: InputGroup,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[350px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const WithIconStart: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <IconSearch className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  ),
}

export const WithIconEnd: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Email" />
      <InputGroupAddon align="inline-end">
        <IconMail className="size-4" />
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const WithTextAddon: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>
  ),
}

export const WithButton: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Enter code" />
      <InputGroupButton align="inline-end">
        <IconCopy className="size-4" />
      </InputGroupButton>
    </InputGroup>
  ),
}

export const PasswordToggle: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput type="password" placeholder="Password" />
      <InputGroupButton align="inline-end" variant="ghost">
        <IconEye className="size-4" />
      </InputGroupButton>
    </InputGroup>
  ),
}

export const WithTextarea: Story = {
  render: () => (
    <InputGroup className="items-end">
      <InputGroupTextarea placeholder="Type your message..." />
      <InputGroupButton align="inline-end" className="mb-2 mr-2">
        <IconSend className="size-4" />
      </InputGroupButton>
    </InputGroup>
  ),
}

export const Combined: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <IconMail className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Email address" />
      <InputGroupButton align="inline-end" variant="default" size="sm">
        Subscribe
      </InputGroupButton>
    </InputGroup>
  ),
}
