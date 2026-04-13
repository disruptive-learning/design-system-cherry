import type { Meta, StoryObj } from "@storybook/react"
import { AspectRatio } from "./AspectRatio"

const meta: Meta<typeof AspectRatio> = {
  title: "Atoms/AspectRatio",
  component: AspectRatio,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={1} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const Portrait: Story = {
  render: () => (
    <div className="w-[200px]">
      <AspectRatio ratio={3 / 4} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const Video: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
        <div className="flex h-full w-full items-center justify-center bg-gray-900 text-white">
          <svg
            className="h-12 w-12"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </AspectRatio>
    </div>
  ),
}

export const Ratios: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="w-[150px]">
        <p className="mb-2 text-sm text-muted-foreground">1:1</p>
        <AspectRatio ratio={1} className="bg-muted rounded-md" />
      </div>
      <div className="w-[150px]">
        <p className="mb-2 text-sm text-muted-foreground">4:3</p>
        <AspectRatio ratio={4 / 3} className="bg-muted rounded-md" />
      </div>
      <div className="w-[150px]">
        <p className="mb-2 text-sm text-muted-foreground">16:9</p>
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-md" />
      </div>
      <div className="w-[150px]">
        <p className="mb-2 text-sm text-muted-foreground">21:9</p>
        <AspectRatio ratio={21 / 9} className="bg-muted rounded-md" />
      </div>
    </div>
  ),
}
