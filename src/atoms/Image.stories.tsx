import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Assets/Images",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj

/**
 * Reusable text-to-image prompt that reproduces the "Bloom" art direction:
 * dreamy macro florals, soft pastel gradients and a quiet sparkle accent.
 * Tweak the {flower} and {palette} slots to generate new variations that
 * still sit comfortably next to Cherry's grayscale UI.
 */
const generationPrompt = `Extreme close-up macro photograph of a single {flower} (rose, poppy, tulip, lotus), shot on a fast prime lens at f/1.4 so almost the entire frame melts into a soft, creamy bokeh. Petals are barely in focus — dreamy, atmospheric, abstract. Background is a smooth top-to-bottom vertical gradient in {palette} (sky-blue→crimson, butter-yellow→violet, crimson→blush-white, olive-green→orange). Gentle film grain and a faint linen-paper texture over the whole image. One tiny four-point sparkle highlight in a corner. Pastel, low-contrast, ethereal, no harsh shadows, no text. Square 1:1 composition (use 16:9 for wide hero crops).`

const promptPalettes = [
  {
    name: "sky → crimson",
    swatch: "linear-gradient(180deg,#6fb7f0,#bcb6e6,#f2ecef,#ef9fb3,#c63b67)",
  },
  {
    name: "butter → violet",
    swatch: "linear-gradient(180deg,#f4e7a3,#f3a258,#eaa6c4,#a98fd0,#8a6fbf)",
  },
  {
    name: "crimson → blush",
    swatch: "linear-gradient(180deg,#c0285f,#f0673f,#f5a7c0,#fbf1f3)",
  },
  {
    name: "olive → orange",
    swatch: "linear-gradient(180deg,#566b35,#b3acc2,#f1b2d2,#f3a86a,#ef9450)",
  },
]

const wideBloom = {
  src: "/illustrations/bloom-lilac-wide.jpg",
  alt: "Wide soft-focus lilac flower over a warm pink gradient",
  name: "bloom-lilac-wide",
}

const blooms = [
  {
    src: "/illustrations/bloom-coral-rose.jpg",
    alt: "Dreamy blurred rose in coral and periwinkle tones",
    name: "bloom-coral-rose",
  },
  {
    src: "/illustrations/bloom-poppy-sunset.jpg",
    alt: "Soft-focus poppy against an orange and violet sunset gradient",
    name: "bloom-poppy-sunset",
  },
  {
    src: "/illustrations/bloom-pink-meadow.jpg",
    alt: "Blurred pink bloom rising over a green-to-pink gradient meadow",
    name: "bloom-pink-meadow",
  },
  {
    src: "/illustrations/bloom-magenta-poppy.jpg",
    alt: "Soft-focus magenta poppy on a warm pink and lilac gradient",
    name: "bloom-magenta-poppy",
  },
  {
    src: "/illustrations/bloom-peach-lotus.jpg",
    alt: "Peach lotus flower blurred against a pale blue sky",
    name: "bloom-peach-lotus",
  },
  {
    src: "/illustrations/bloom-tulip-glow.jpg",
    alt: "Glowing tulip silhouette over a pink and purple gradient with a sparkle accent",
    name: "bloom-tulip-glow",
  },
]

/**
 * Halftone dot grid drawn entirely in CSS — no image asset needed.
 * Overlay it with `mix-blend-screen` so the white dots lighten the bloom
 * underneath, giving the gradients a printed, editorial texture.
 * A soft radial mask keeps the dots at full weight in the center and
 * fades them toward the corners, so they read smaller at the edges.
 * Tune `backgroundSize` for density and the dot radius/alpha for weight.
 */
const dotMask =
  "radial-gradient(ellipse 78% 78% at 50% 50%, #000 28%, rgba(0,0,0,0.4) 68%, transparent 100%)"

const dotPattern = {
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.18) 1.1px, transparent 1.7px)",
  backgroundSize: "9px 9px",
  WebkitMaskImage: dotMask,
  maskImage: dotMask,
}

export const Illustrations: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-4xl">
      <div className="space-y-2">
        <h3 className="text-sm font-mono text-muted-foreground">Wide</h3>
        <img
          src={wideBloom.src}
          alt={wideBloom.alt}
          className="w-full rounded-xl"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-mono text-muted-foreground">Bloom</h3>
        <img
          src={blooms[0].src}
          alt={blooms[0].alt}
          className="w-full rounded-xl"
        />
      </div>
    </div>
  ),
}

export const Gallery: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="flex flex-col gap-12 max-w-6xl mx-auto">
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-base font-mono">Blooms</h2>
          <p className="text-sm font-sans text-muted-foreground">
            Soft-focus floral gradients with dreamy, atmospheric color.
          </p>
        </div>
        <figure className="space-y-2">
          <img
            src={wideBloom.src}
            alt={wideBloom.alt}
            className="w-full aspect-[16/9] object-cover rounded-xl border"
          />
          <figcaption className="text-xs font-mono text-muted-foreground truncate">
            {wideBloom.name}
          </figcaption>
        </figure>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blooms.map((img) => (
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

export const Prompt: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto">
      <div className="space-y-1">
        <h2 className="text-base font-mono">Generation prompt</h2>
        <p className="text-sm font-sans text-muted-foreground">
          Text-to-image prompt used to produce the Bloom set. Swap the{" "}
          <code className="font-mono text-xs">{"{flower}"}</code> and{" "}
          <code className="font-mono text-xs">{"{palette}"}</code> slots to
          generate on-brand variations.
        </p>
      </div>

      <pre className="rounded-xl border bg-muted/40 p-4 text-xs font-mono leading-relaxed whitespace-pre-wrap">
        {generationPrompt}
      </pre>

      <div className="space-y-2">
        <h3 className="text-sm font-mono text-muted-foreground">
          Suggested palettes
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {promptPalettes.map((p) => (
            <figure key={p.name} className="space-y-1.5">
              <div
                className="h-40 w-full rounded-lg border"
                style={{ backgroundImage: p.swatch }}
              />
              <figcaption className="text-xs font-sans text-muted-foreground">
                {p.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <ul className="text-xs font-sans text-muted-foreground list-disc pl-4 space-y-1">
        <li>Square 1:1 for grid blooms, 16:9 for wide hero crops.</li>
        <li>Keep it soft-focus and low-contrast so the grayscale UI stays the hero.</li>
        <li>Export as optimized JPG (~2048px, quality ~82) into <code className="font-mono">public/illustrations/</code>.</li>
      </ul>
    </div>
  ),
}

export const PatternOverlay: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="flex flex-col gap-12 max-w-6xl mx-auto">
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-base font-mono">Halftone overlay</h2>
          <p className="text-sm font-sans text-muted-foreground">
            A CSS dot grid laid over each bloom with{" "}
            <code className="font-mono text-xs">mix-blend-screen</code> for a
            printed, editorial texture.
          </p>
        </div>

        {/* Editorial hero — pattern + headline, like a marketing banner */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border">
          <img
            src={wideBloom.src}
            alt={wideBloom.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 mix-blend-screen"
            style={dotPattern}
          />
          <div className="absolute inset-0 flex flex-col justify-center gap-2 p-8 md:p-12">
            <h2 className="font-mono text-3xl md:text-5xl text-white max-w-xl leading-tight">
              Transform your team
            </h2>
            <p className="font-sans text-sm md:text-base text-white/80 max-w-md">
              Editorial gradient treatment paired with Cherry's grayscale UI.
            </p>
          </div>
        </div>

        {/* Grid — the pattern applied to every square bloom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blooms.map((img) => (
            <figure key={img.name} className="space-y-2">
              <div className="relative aspect-square overflow-hidden rounded-xl border">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 mix-blend-screen"
                  style={dotPattern}
                />
              </div>
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

export const PatternCompare: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
      <figure className="space-y-2">
        <div className="aspect-square overflow-hidden rounded-xl border">
          <img
            src={blooms[1].src}
            alt={blooms[1].alt}
            className="h-full w-full object-cover"
          />
        </div>
        <figcaption className="text-xs font-mono text-muted-foreground">
          without pattern
        </figcaption>
      </figure>
      <figure className="space-y-2">
        <div className="relative aspect-square overflow-hidden rounded-xl border">
          <img
            src={blooms[1].src}
            alt={blooms[1].alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 mix-blend-screen"
            style={dotPattern}
          />
        </div>
        <figcaption className="text-xs font-mono text-muted-foreground">
          with halftone overlay
        </figcaption>
      </figure>
    </div>
  ),
}

export const BloomHero: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl">
      <img
        src={wideBloom.src}
        alt={wideBloom.alt}
        className="w-full h-80 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />
      <div className="absolute bottom-8 left-8 space-y-2">
        <h2 className="text-3xl font-mono text-foreground">Wander further</h2>
        <p className="text-sm font-sans text-muted-foreground max-w-sm">
          Soft-focus bloom paired with Cherry's grayscale UI.
        </p>
      </div>
    </div>
  ),
}

export const BloomCardGrid: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
      {blooms.slice(0, 3).map((img) => (
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
              Soft-focus bloom suited for muted card surfaces.
            </p>
          </div>
        </article>
      ))}
    </div>
  ),
}

export const Wide: Story = {
  render: () => (
    <img
      src={wideBloom.src}
      alt={wideBloom.alt}
      className="max-w-2xl rounded-xl"
    />
  ),
}

export const Flowers: Story = {
  render: () => (
    <img
      src={blooms[0].src}
      alt={blooms[0].alt}
      className="max-w-2xl rounded-xl"
    />
  ),
}

export const AsHero: Story = {
  render: () => (
    <div className="relative w-full max-w-4xl overflow-hidden rounded-xl">
      <img
        src={wideBloom.src}
        alt={wideBloom.alt}
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
        src={blooms[0].src}
        alt={blooms[0].alt}
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
