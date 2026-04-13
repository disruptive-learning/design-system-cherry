import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardContent, CardFooter } from './Card';
import { Heading, Text } from '../Typography';
import { Button } from '../Button';
import { Badge } from '../Badge';
import '../../styles/tokens.css';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: '400px' }}>
      <CardHeader>
        <Heading size="md">Getting Started</Heading>
      </CardHeader>
      <CardContent>
        <Text variant="muted">
          Learn how to integrate Cherry AI into your application in minutes.
        </Text>
      </CardContent>
    </Card>
  ),
};

export const Outlined: Story = {
  render: () => (
    <Card variant="outlined" style={{ maxWidth: '400px' }}>
      <CardHeader>
        <Heading size="md">API Reference</Heading>
      </CardHeader>
      <CardContent>
        <Text variant="muted">
          Complete documentation for all Cherry AI endpoints and methods.
        </Text>
      </CardContent>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated" style={{ maxWidth: '400px' }}>
      <CardHeader>
        <Heading size="md">Premium Plan</Heading>
      </CardHeader>
      <CardContent>
        <Text variant="muted">
          Unlock unlimited searches and advanced features for your team.
        </Text>
      </CardContent>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card
      variant="default"
      interactive
      onClick={() => alert('Card clicked!')}
      style={{ maxWidth: '400px' }}
    >
      <CardHeader>
        <Heading size="md">Click Me</Heading>
      </CardHeader>
      <CardContent>
        <Text variant="muted">
          This card is interactive. Click anywhere to trigger an action.
        </Text>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card style={{ maxWidth: '400px' }}>
      <CardHeader>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Heading size="md">Pro Plan</Heading>
          <Badge>Popular</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Text variant="muted">
          Everything you need to scale your product discovery experience.
        </Text>
        <div style={{ marginTop: '16px' }}>
          <Heading size="2xl">$49<Text as="span" size="sm" variant="muted">/month</Text></Heading>
        </div>
      </CardContent>
      <CardFooter>
        <Button fullWidth>Get Started</Button>
      </CardFooter>
    </Card>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '900px' }}>
      <Card interactive>
        <CardContent>
          <Heading size="sm">Search</Heading>
          <Text size="sm" variant="muted">Find products instantly</Text>
        </CardContent>
      </Card>
      <Card interactive>
        <CardContent>
          <Heading size="sm">Compare</Heading>
          <Text size="sm" variant="muted">Side-by-side analysis</Text>
        </CardContent>
      </Card>
      <Card interactive>
        <CardContent>
          <Heading size="sm">Save</Heading>
          <Text size="sm" variant="muted">Organize your finds</Text>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
