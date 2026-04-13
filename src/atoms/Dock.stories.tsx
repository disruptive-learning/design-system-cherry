import type { Meta, StoryObj } from "@storybook/react"
import { Dock, DockItem } from "./Dock"
import {
  IconHome,
  IconSearch,
  IconSettings,
  IconBell,
  IconUser,
  IconMessage,
  IconFolder,
  IconCalendar,
} from "@tabler/icons-react"

const meta: Meta<typeof Dock> = {
  title: "Atoms/Dock",
  component: Dock,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dock>
      <DockItem icon={<IconHome className="size-6" />} label="Home" />
      <DockItem icon={<IconSearch className="size-6" />} label="Search" />
      <DockItem icon={<IconMessage className="size-6" />} label="Messages" />
      <DockItem icon={<IconBell className="size-6" />} label="Notifications" />
      <DockItem icon={<IconSettings className="size-6" />} label="Settings" />
    </Dock>
  ),
}

export const WithoutLabels: Story = {
  render: () => (
    <Dock>
      <DockItem icon={<IconHome className="size-6" />} />
      <DockItem icon={<IconSearch className="size-6" />} />
      <DockItem icon={<IconMessage className="size-6" />} />
      <DockItem icon={<IconSettings className="size-6" />} />
    </Dock>
  ),
}

export const Extended: Story = {
  render: () => (
    <Dock>
      <DockItem icon={<IconHome className="size-6" />} label="Home" />
      <DockItem icon={<IconSearch className="size-6" />} label="Search" />
      <DockItem icon={<IconFolder className="size-6" />} label="Files" />
      <DockItem icon={<IconMessage className="size-6" />} label="Messages" />
      <DockItem icon={<IconCalendar className="size-6" />} label="Calendar" />
      <DockItem icon={<IconBell className="size-6" />} label="Notifications" />
      <DockItem icon={<IconUser className="size-6" />} label="Profile" />
      <DockItem icon={<IconSettings className="size-6" />} label="Settings" />
    </Dock>
  ),
}

export const Minimal: Story = {
  render: () => (
    <Dock>
      <DockItem icon={<IconHome className="size-6" />} label="Home" />
      <DockItem icon={<IconSearch className="size-6" />} label="Search" />
      <DockItem icon={<IconUser className="size-6" />} label="Profile" />
    </Dock>
  ),
}
