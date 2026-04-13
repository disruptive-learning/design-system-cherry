import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Assets/Images",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj

export const Illustrations: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-4xl">
      <div className="space-y-2">
        <h3 className="text-sm font-mono text-muted-foreground">Landscape</h3>
        <img
          src="/illustration-landscape.png"
          alt="Desert landscape with mountains and river"
          className="w-full rounded-xl"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-mono text-muted-foreground">Flowers</h3>
        <img
          src="/illustration-flowers.png"
          alt="Mountain landscape with flowers"
          className="w-full rounded-xl"
        />
      </div>
    </div>
  ),
}

export const Landscape: Story = {
  render: () => (
    <img
      src="/illustration-landscape.png"
      alt="Desert landscape with mountains and river"
      className="max-w-2xl rounded-xl"
    />
  ),
}

export const Flowers: Story = {
  render: () => (
    <img
      src="/illustration-flowers.png"
      alt="Mountain landscape with flowers"
      className="max-w-2xl rounded-xl"
    />
  ),
}

export const AsHero: Story = {
  render: () => (
    <div className="relative w-full max-w-4xl overflow-hidden rounded-xl">
      <img
        src="/illustration-landscape.png"
        alt="Desert landscape"
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      <div className="absolute bottom-6 left-6">
        <h2 className="text-2xl font-mono text-foreground">Welcome to Cherry</h2>
        <p className="text-sm text-muted-foreground font-sans">Your AI companion</p>
      </div>
    </div>
  ),
}

export const AsCard: Story = {
  render: () => (
    <div className="w-80 overflow-hidden rounded-xl border bg-card">
      <img
        src="/illustration-flowers.png"
        alt="Flowers landscape"
        className="w-full h-40 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="font-mono text-sm">Featured Collection</h3>
        <p className="text-sm text-muted-foreground font-sans">
          Explore our curated illustrations for your projects.
        </p>
      </div>
    </div>
  ),
}

export const Avatar: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-mono text-muted-foreground">Profile Avatar</h3>
      <img
        src="/avatar-cherry.png"
        alt="Cherry avatar"
        className="w-24 h-24 rounded-full object-cover"
      />
    </div>
  ),
}
