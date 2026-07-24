# Cherry design system — Agent instructions

## Brand

Canonical identity, voice, design, color, typography, Orb, imagery, and product
UI vocabulary live in [`../cherry_brand/`](../cherry_brand/). This repository
implements reusable React components and Storybook; it does not define brand
rules.

Before visual work, read:

- [`../cherry_brand/CLAUDE.md`](../cherry_brand/CLAUDE.md)
- [`../cherry_brand/DESIGN.md`](../cherry_brand/DESIGN.md)
- [`../cherry_brand/COLOR.md`](../cherry_brand/COLOR.md)
- [`../cherry_brand/TYPOGRAPHY.md`](../cherry_brand/TYPOGRAPHY.md)
- [`../cherry_brand/ORB.md`](../cherry_brand/ORB.md)
- [`../cherry_brand/PRODUCT-UI.md`](../cherry_brand/PRODUCT-UI.md)

If existing component code or stories disagree with canon, treat that as
implementation debt and align the implementation. Do not preserve drift by
restating it in this file.

## Project overview

React component library built with Atomic Design and documented in Storybook.

## Tech stack

- React 19 and strict TypeScript.
- Tailwind CSS v4.
- shadcn/ui and Radix/Base UI primitives.
- Storybook 10.
- Tabler Icons.
- Three.js where a component genuinely requires WebGL.

## Component conventions

- Use `className="size-4"` for icon sizing, not separate width/height classes.
- Merge classes through `cn()`.
- Forward refs for components that render DOM nodes.
- Export component prop types separately.
- Use canonical semantic tokens; do not hardcode brand values.
- Create a sibling `.stories.tsx` file for every reusable component.
- Export from the appropriate atomic-level barrel.

## Atomic structure

```text
src/
├── atoms/
├── molecules/
├── organisms/
├── pages/
├── templates/
└── components/ui/
```

Composition-specific page and application behavior remains with consumers.

## Creating a component

1. Confirm that composition of existing primitives does not already solve the
   need.
2. Choose the correct atomic level.
3. Implement against semantic tokens and canonical behavior.
4. Add default, state, theme, accessibility, and reduced-motion stories as
   applicable.
5. Export from the folder barrel.
6. Run Storybook, lint, and build.

## Story template

```tsx
import type { Meta, StoryObj } from "@storybook/react"
import { Component } from "./Component"

const meta: Meta<typeof Component> = {
  title: "Atoms/Component",
  component: Component,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} }
```

## Key files

- `src/index.css` — implementation tokens and animation definitions.
- `src/lib/utils.ts` — `cn()` helper.
- `src/atoms/index.ts` — atom exports.

## Commands

```bash
npm run storybook
npm run build
npm run lint
```

## Cherry-specific components

- `Orb` implementations must conform to `cherry_brand/ORB.md`; a legacy
  wireframe sphere is implementation drift, not canon.
- Loaders communicate real operation state.
- Conversation components expose useful rationale and evidence, not hidden
  chain-of-thought.
- `Message`, `PromptInput`, and `ChatContainer` are reusable interaction
  primitives, not Cherry's category or identity.

## Operational notes

- Do not use `asChild` with a component that renders multiple children.
- Clear the Storybook cache if local component changes do not appear.
- Use the Node version required by `package.json`.
