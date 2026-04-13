# Cherry Design System - Claude Instructions

## Project Overview
This is the design system for **Cherry AI** (trycherry.ai). It's built with React, Tailwind CSS, shadcn/ui, and follows Atomic Design Methodology.

## Tech Stack
- **React 19** + TypeScript
- **Tailwind CSS v4**
- **shadcn/ui** components as base
- **Storybook 10** for documentation
- **Tabler Icons** (`@tabler/icons-react`)
- **Three.js** for 3D components (Orb)

## Design Principles

### Typography
- **Geist Mono** (`font-mono`): Titles, headings, buttons, badges, labels
- **Geist Sans** (`font-sans`): Body text, descriptions, help text
- **No bold fonts**: Use `font-normal` or `font-medium` only

### Colors
- **Grayscale theme**: No colors except for destructive states
- Uses oklch color space for precise grays
- Dark mode supported via `.dark` class

### Component Conventions
- Use `className="size-4"` for icon sizing (not `w-4 h-4`)
- Always use `cn()` utility for merging classNames
- Prefer `forwardRef` for all components
- Export types separately: `export type { ComponentProps }`

## Atomic Design Structure

```
src/
├── atoms/          # Basic UI elements (Button, Input, Badge, etc.)
├── molecules/      # Combinations of atoms (Calendar, Tabs, CodeBlock)
├── organisms/      # Complex components (ChatContainer, Message, PromptInput)
├── pages/          # Page layouts
├── templates/      # Page templates
└── components/ui/  # shadcn/ui base components (don't modify directly)
```

## Icon Usage
```tsx
import { IconName } from "@tabler/icons-react"
<IconName className="size-4" />
```

## Creating New Components

1. Create component in appropriate atomic level folder
2. Create `.stories.tsx` file alongside
3. Export from folder's `index.ts`
4. Use existing components as reference

### Story Template
```tsx
import type { Meta, StoryObj } from "@storybook/react"
import { Component } from "./Component"

const meta: Meta<typeof Component> = {
  title: "Atoms/Component",  // or Molecules/, Organisms/
  component: Component,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
```

## Key Files
- `src/index.css` - Theme tokens and animations
- `src/lib/utils.ts` - `cn()` utility function
- `src/atoms/index.ts` - All atom exports

## Commands
```bash
npm run storybook    # Start Storybook dev server
npm run build        # Build the library
npm run lint         # Run ESLint
```

## AI-Specific Components
Components tagged with `tags: ["ai"]` in Storybook are specific to AI chat interfaces:
- `Loader` (multiple variants for AI thinking states)
- `Orb` (3D animated orb)
- `Terminal` (typing animation)
- `ChainOfThought`, `Reasoning`, `ResponseStream`
- `Message`, `PromptInput`, `ChatContainer`

## Notes
- Don't use `asChild` with components that render multiple children (causes React.Children.only error)
- Clear Storybook cache if components don't update: `rm -rf node_modules/.cache/storybook`
- Use Node.js v20.19+ for best compatibility
