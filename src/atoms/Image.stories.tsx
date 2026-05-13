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

const painterlyIllustrations = [
  {
    src: "/illustrations/landscape-painterly-01-river.jpg",
    alt: "Painterly landscape with maroon mountains and winding river under stormy sky",
    name: "landscape-painterly-01-river",
  },
  {
    src: "/illustrations/landscape-painterly-02-river-sparkle.png",
    alt: "Painterly landscape with maroon mountains, river and sparkle accent",
    name: "landscape-painterly-02-river-sparkle",
  },
  {
    src: "/illustrations/landscape-painterly-03-flowers.png",
    alt: "Painterly mountains with field of brushstroke flowers under cloudy sky",
    name: "landscape-painterly-03-flowers",
  },
  {
    src: "/illustrations/landscape-painterly-04-flowers-sunset.png",
    alt: "Painterly mountains with flowers under golden sunset sky",
    name: "landscape-painterly-04-flowers-sunset",
  },
]

const monoIllustrations = [
  {
    src: "/illustrations/landscape-mono-01-lake-flowers.png",
    alt: "Monochrome rose landscape with mountains, lake, dunes and wildflowers",
    name: "landscape-mono-01-lake-flowers",
  },
  {
    src: "/illustrations/landscape-mono-02-peak.png",
    alt: "Monochrome rose landscape with single peak and dunes",
    name: "landscape-mono-02-peak",
  },
  {
    src: "/illustrations/landscape-mono-03-mountains-mist.png",
    alt: "Monochrome rose layered mountains with mist",
    name: "landscape-mono-03-mountains-mist",
  },
  {
    src: "/illustrations/landscape-mono-04-lake-flowers-alt.png",
    alt: "Monochrome rose landscape with mountains, lake and wildflowers, alt composition",
    name: "landscape-mono-04-lake-flowers-alt",
  },
  {
    src: "/illustrations/landscape-mono-05-lake-flowers-detail.png",
    alt: "Monochrome rose landscape with mountains, lake and detailed wildflowers",
    name: "landscape-mono-05-lake-flowers-detail",
  },
]

export const Gallery: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="flex flex-col gap-12 max-w-6xl mx-auto">
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-base font-mono">Painterly</h2>
          <p className="text-sm font-sans text-muted-foreground">
            Full-color brushstroke illustrations with dramatic skies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {painterlyIllustrations.map((img) => (
            <figure key={img.name} className="space-y-2">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-[16/9] object-cover rounded-xl border"
              />
              <figcaption className="text-xs font-mono text-muted-foreground truncate">
                {img.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-base font-mono">Mono Rose</h2>
          <p className="text-sm font-sans text-muted-foreground">
            Monochrome rose-tone illustrations with textured, etched feel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {monoIllustrations.map((img) => (
            <figure key={img.name} className="space-y-2">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-square object-cover rounded-xl border"
              />
              <figcaption className="text-xs font-mono text-muted-foreground truncate">
                {img.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  ),
}

export const PainterlyHero: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl">
      <img
        src="/illustrations/landscape-painterly-02-river-sparkle.png"
        alt="Painterly landscape hero"
        className="w-full h-80 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
      <div className="absolute bottom-8 left-8 space-y-2">
        <h2 className="text-3xl font-mono text-foreground">Wander further</h2>
        <p className="text-sm font-sans text-muted-foreground max-w-sm">
          Painterly illustration paired with Cherry's grayscale UI.
        </p>
      </div>
    </div>
  ),
}

export const MonoCardGrid: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
      {monoIllustrations.slice(0, 3).map((img) => (
        <article
          key={img.name}
          className="overflow-hidden rounded-xl border bg-card"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 space-y-1">
            <h3 className="font-mono text-sm">{img.name.replace(/-/g, " ")}</h3>
            <p className="text-xs font-sans text-muted-foreground">
              Mono rose illustration suited for muted card surfaces.
            </p>
          </div>
        </article>
      ))}
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
