import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import '../../styles/tokens.css';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'document',
    size: 'md',
  },
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
      {(['document', 'globe', 'lightning', 'clock', 'card', 'moon', 'check', 'arrow-right', 'chevron-right'] as const).map((name) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Icon name={name} size="lg" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--foreground-muted)' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
  name: 'All Icons',
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon name="globe" size="sm" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>sm</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="globe" size="md" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>md</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="globe" size="lg" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>lg</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="globe" size="xl" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>xl</p>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon name="lightning" size="lg" color="default" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>default</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="lightning" size="lg" color="muted" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>muted</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="lightning" size="lg" color="subtle" />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>subtle</p>
      </div>
    </div>
  ),
};
