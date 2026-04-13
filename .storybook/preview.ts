import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#0A0A0A' },
        { name: 'cream', value: '#F7F7F5' },
      ],
    },
    a11y: {
      test: 'todo'
    }
  },
}

export default preview
