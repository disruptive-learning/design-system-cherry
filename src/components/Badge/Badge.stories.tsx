import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import '../../styles/tokens.css';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'New',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Beta',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Coming Soon',
  },
};

export const Pill: Story = {
  args: {
    pill: true,
    children: 'Featured',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const PillVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge variant="default" pill>New</Badge>
      <Badge variant="secondary" pill>Beta</Badge>
      <Badge variant="outline" pill>Soon</Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge variant="default">Active</Badge>
      <Badge variant="secondary">Pending</Badge>
      <Badge variant="outline">Inactive</Badge>
    </div>
  ),
};

export const ProductLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge size="sm" pill>AI Powered</Badge>
      <Badge size="sm" variant="secondary" pill>Free Trial</Badge>
      <Badge size="sm" variant="outline" pill>Enterprise</Badge>
    </div>
  ),
};
