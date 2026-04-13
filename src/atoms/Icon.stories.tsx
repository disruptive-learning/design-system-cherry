import type { Meta, StoryObj } from "@storybook/react"
import {
  // Essential UI
  IconHome,
  IconSearch,
  IconSettings,
  IconBell,
  IconMenu2,
  IconX,
  IconPlus,
  IconMinus,
  IconCircleCheck,
  IconInfoCircle,
  // Arrows & Navigation
  IconArrowRight,
  IconArrowLeft,
  IconArrowUp,
  IconArrowDown,
  IconChevronRight,
  IconChevronLeft,
  // Communication
  IconMessage,
  IconSend,
  IconMicrophone,
  IconPhone,
  // User
  IconUser,
  IconUserCircle,
  IconUsers,
  IconUserPlus,
  // Documents
  IconFile,
  IconFileText,
  IconFolder,
  IconCopy,
  IconEdit,
  IconTrash,
  // AI & Tech
  IconCpu,
  IconCode,
  IconCommand,
  IconWand,
  IconDatabase,
  // Media
  IconPlayerPlay,
  IconPlayerPause,
  IconPlayerStop,
  IconVolume,
  IconPhoto,
  // Time
  IconClock,
  IconCalendar,
  IconHourglass,
} from "@tabler/icons-react"

const meta: Meta = {
  title: "Atoms/Icon",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj

const IconItem = ({
  icon: Icon,
  name,
}: {
  icon: React.ComponentType<{ className?: string }>
  name: string
}) => (
  <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
    <Icon className="size-6" />
    <span className="text-[10px] text-muted-foreground font-mono">{name}</span>
  </div>
)

export const Essential: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-mono text-muted-foreground">Essential UI</h3>
      <div className="grid grid-cols-5 gap-2">
        <IconItem icon={IconHome} name="Home" />
        <IconItem icon={IconSearch} name="Search" />
        <IconItem icon={IconSettings} name="Settings" />
        <IconItem icon={IconBell} name="Bell" />
        <IconItem icon={IconMenu2} name="Menu" />
        <IconItem icon={IconX} name="Close" />
        <IconItem icon={IconPlus} name="Plus" />
        <IconItem icon={IconMinus} name="Minus" />
        <IconItem icon={IconCircleCheck} name="Check" />
        <IconItem icon={IconInfoCircle} name="Info" />
      </div>
    </div>
  ),
}

export const Navigation: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-mono text-muted-foreground">Navigation</h3>
      <div className="grid grid-cols-6 gap-2">
        <IconItem icon={IconArrowRight} name="Right" />
        <IconItem icon={IconArrowLeft} name="Left" />
        <IconItem icon={IconArrowUp} name="Up" />
        <IconItem icon={IconArrowDown} name="Down" />
        <IconItem icon={IconChevronRight} name="Chevron R" />
        <IconItem icon={IconChevronLeft} name="Chevron L" />
      </div>
    </div>
  ),
}

export const Communication: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-mono text-muted-foreground">Communication</h3>
      <div className="grid grid-cols-4 gap-2">
        <IconItem icon={IconMessage} name="Message" />
        <IconItem icon={IconSend} name="Send" />
        <IconItem icon={IconMicrophone} name="Mic" />
        <IconItem icon={IconPhone} name="Phone" />
      </div>
    </div>
  ),
}

export const Users: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-mono text-muted-foreground">Users</h3>
      <div className="grid grid-cols-4 gap-2">
        <IconItem icon={IconUser} name="User" />
        <IconItem icon={IconUserCircle} name="Profile" />
        <IconItem icon={IconUsers} name="Users" />
        <IconItem icon={IconUserPlus} name="UserAdd" />
      </div>
    </div>
  ),
}

export const Documents: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-mono text-muted-foreground">Documents</h3>
      <div className="grid grid-cols-6 gap-2">
        <IconItem icon={IconFile} name="File" />
        <IconItem icon={IconFileText} name="FileText" />
        <IconItem icon={IconFolder} name="Folder" />
        <IconItem icon={IconCopy} name="Copy" />
        <IconItem icon={IconEdit} name="Edit" />
        <IconItem icon={IconTrash} name="Trash" />
      </div>
    </div>
  ),
}

export const AITech: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-mono text-muted-foreground">AI & Tech</h3>
      <div className="grid grid-cols-5 gap-2">
        <IconItem icon={IconCpu} name="Cpu" />
        <IconItem icon={IconCode} name="Code" />
        <IconItem icon={IconCommand} name="Command" />
        <IconItem icon={IconWand} name="Magic" />
        <IconItem icon={IconDatabase} name="Database" />
      </div>
    </div>
  ),
}

export const Media: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-mono text-muted-foreground">Media</h3>
      <div className="grid grid-cols-5 gap-2">
        <IconItem icon={IconPlayerPlay} name="Play" />
        <IconItem icon={IconPlayerPause} name="Pause" />
        <IconItem icon={IconPlayerStop} name="Stop" />
        <IconItem icon={IconVolume} name="Volume" />
        <IconItem icon={IconPhoto} name="Image" />
      </div>
    </div>
  ),
}

export const Time: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-mono text-muted-foreground">Time</h3>
      <div className="grid grid-cols-3 gap-2">
        <IconItem icon={IconClock} name="Clock" />
        <IconItem icon={IconCalendar} name="Calendar" />
        <IconItem icon={IconHourglass} name="Timer" />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-mono text-muted-foreground">Sizes</h3>
      <div className="flex items-end gap-8">
        <div className="flex flex-col items-center gap-2">
          <IconCpu className="size-4" />
          <span className="text-xs font-mono">16</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IconCpu className="size-5" />
          <span className="text-xs font-mono">20</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IconCpu className="size-6" />
          <span className="text-xs font-mono">24</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IconCpu className="size-8" />
          <span className="text-xs font-mono">32</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IconCpu className="size-12" />
          <span className="text-xs font-mono">48</span>
        </div>
      </div>
    </div>
  ),
}

export const AllIcons: Story = {
  render: () => (
    <div className="space-y-6">
      <h3 className="text-sm font-mono text-muted-foreground">All Icons</h3>
      <div className="grid grid-cols-8 gap-2">
        <IconItem icon={IconHome} name="Home" />
        <IconItem icon={IconSearch} name="Search" />
        <IconItem icon={IconSettings} name="Settings" />
        <IconItem icon={IconBell} name="Bell" />
        <IconItem icon={IconMenu2} name="Menu" />
        <IconItem icon={IconX} name="Close" />
        <IconItem icon={IconPlus} name="Plus" />
        <IconItem icon={IconMinus} name="Minus" />
        <IconItem icon={IconCircleCheck} name="Check" />
        <IconItem icon={IconInfoCircle} name="Info" />
        <IconItem icon={IconArrowRight} name="Right" />
        <IconItem icon={IconArrowLeft} name="Left" />
        <IconItem icon={IconArrowUp} name="Up" />
        <IconItem icon={IconArrowDown} name="Down" />
        <IconItem icon={IconMessage} name="Message" />
        <IconItem icon={IconSend} name="Send" />
        <IconItem icon={IconUser} name="User" />
        <IconItem icon={IconUserCircle} name="Profile" />
        <IconItem icon={IconFile} name="File" />
        <IconItem icon={IconFolder} name="Folder" />
        <IconItem icon={IconCopy} name="Copy" />
        <IconItem icon={IconEdit} name="Edit" />
        <IconItem icon={IconTrash} name="Trash" />
        <IconItem icon={IconCpu} name="Cpu" />
        <IconItem icon={IconCode} name="Code" />
        <IconItem icon={IconCommand} name="Cmd" />
        <IconItem icon={IconWand} name="Magic" />
        <IconItem icon={IconPlayerPlay} name="Play" />
        <IconItem icon={IconPlayerPause} name="Pause" />
        <IconItem icon={IconClock} name="Clock" />
        <IconItem icon={IconCalendar} name="Calendar" />
        <IconItem icon={IconMicrophone} name="Mic" />
      </div>
    </div>
  ),
}
