import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import '../../styles/tokens.css';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Join Waitlist',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Learn More',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'View Details',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Cancel',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Get Started',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button',
  },
  parameters: {
    layout: 'padded',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    loading: true,
    children: 'Processing',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const CherryStyle: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="primary" size="lg">Join Waitlist</Button>
      <Button variant="outline" size="lg">Learn More</Button>
    </div>
  ),
  name: 'Cherry Style (Mono + Uppercase)',
};

export const InContext: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px',
      maxWidth: '800px',
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 500 }}>
        cherry
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button variant="ghost" size="sm">Docs</Button>
        <Button variant="ghost" size="sm">Pricing</Button>
        <Button variant="primary" size="sm">Get Started</Button>
      </div>
    </div>
  ),
  name: 'In Navigation Context',
  parameters: {
    layout: 'padded',
  },
};
