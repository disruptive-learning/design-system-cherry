import type { Meta, StoryObj } from "@storybook/react"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./HoverCard"
import { Avatar, AvatarImage, AvatarFallback } from "./Avatar"
import { Button } from "./Button"

const meta: Meta<typeof HoverCard> = {
  title: "Atoms/HoverCard",
  component: HoverCard,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="font-mono">@username</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-mono">@username</h4>
            <p className="text-sm text-muted-foreground">
              Software developer and open source enthusiast.
            </p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const WithLink: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href="#" className="font-mono text-sm underline underline-offset-4">
          View documentation
        </a>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-mono">Documentation</h4>
          <p className="text-sm text-muted-foreground">
            Learn how to use all the components in this design system.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}
