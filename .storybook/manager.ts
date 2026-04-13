import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming/create'

const cherryTheme = create({
  base: 'light',

  // Brand
  brandTitle: 'Cherry Design System',
  brandUrl: 'https://trycherry.ai',
  brandImage: '/logo_cherry.png',
  brandTarget: '_blank',

  // Colors
  colorPrimary: '#000000',
  colorSecondary: '#000000',

  // UI
  appBg: '#FFFFFF',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#E5E5E5',
  appBorderRadius: 8,

  // Text colors
  textColor: '#0A0A0A',
  textInverseColor: '#FFFFFF',
  textMutedColor: '#737373',

  // Toolbar
  barTextColor: '#737373',
  barSelectedColor: '#000000',
  barHoverColor: '#000000',
  barBg: '#FFFFFF',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#E5E5E5',
  inputTextColor: '#0A0A0A',
  inputBorderRadius: 6,

  // Typography
  fontBase: '"Geist Variable", "Geist", system-ui, -apple-system, sans-serif',
  fontCode: '"Geist Mono", ui-monospace, "SF Mono", Menlo, monospace',
})

addons.setConfig({
  theme: cherryTheme,
  sidebar: {
    showRoots: true,
  },
})
