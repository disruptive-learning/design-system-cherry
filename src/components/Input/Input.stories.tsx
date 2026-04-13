import type { Meta, StoryObj } from '@storybook/react';
import { Input, Textarea } from './Input';
import '../../styles/tokens.css';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your email...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    helperText: 'Must be at least 8 characters',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    defaultValue: 'invalid-email',
    error: true,
    errorMessage: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit this',
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input (default)" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    label: 'Full width input',
    placeholder: 'This takes the full width',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const SearchInput: Story = {
  args: {
    type: 'search',
    placeholder: 'Search products...',
    size: 'lg',
  },
};

export const TextareaDefault: Story = {
  render: () => (
    <Textarea
      label="Description"
      placeholder="Tell us about your product..."
      helperText="Maximum 500 characters"
    />
  ),
  name: 'Textarea',
};

export const TextareaError: Story = {
  render: () => (
    <Textarea
      label="Feedback"
      placeholder="Your feedback..."
      error
      errorMessage="Feedback cannot be empty"
    />
  ),
  name: 'Textarea - Error',
};

export const FormExample: Story = {
  render: () => (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
      <Input
        label="Full name"
        placeholder="John Doe"
        fullWidth
      />
      <Input
        label="Email"
        type="email"
        placeholder="john@example.com"
        fullWidth
      />
      <Textarea
        label="Message"
        placeholder="How can we help you?"
        fullWidth
        rows={4}
      />
    </form>
  ),
  name: 'Form Example',
  parameters: {
    layout: 'padded',
  },
};
