import type { Meta, StoryObj } from "@storybook/react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./Card"
import { Button } from "./Button"
import { Input } from "./Input"
import { Label } from "./Label"

const meta: Meta<typeof Card> = {
  title: "Atoms/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content and details.</p>
      </CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name of your project" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <p>You have 3 unread messages.</p>
      </CardContent>
    </Card>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Card className="w-[350px] overflow-hidden">
      <img
        src="/illustration-flowers.png"
        alt="Landscape"
        className="w-full h-40 object-cover"
      />
      <CardHeader>
        <CardTitle>Featured</CardTitle>
        <CardDescription>Explore our latest collection.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Discover new illustrations and artwork for your projects.</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Collection</Button>
      </CardFooter>
    </Card>
  ),
}

export const Stats: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card className="w-[200px]">
        <CardHeader className="pb-2">
          <CardDescription>Total Users</CardDescription>
          <CardTitle className="text-3xl">12,345</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">+20% from last month</p>
        </CardContent>
      </Card>
      <Card className="w-[200px]">
        <CardHeader className="pb-2">
          <CardDescription>Revenue</CardDescription>
          <CardTitle className="text-3xl">$45,231</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">+15% from last month</p>
        </CardContent>
      </Card>
    </div>
  ),
}

export const Clickable: Story = {
  render: () => (
    <Card className="w-[350px] cursor-pointer transition-colors hover:bg-accent">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>Click me to see the hover effect.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has hover styles for interactive use cases.</p>
      </CardContent>
    </Card>
  ),
}
