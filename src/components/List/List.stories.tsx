import type { Meta, StoryObj } from '@storybook/react';
import { CheckList, List, ListItem } from './List';
import '../../styles/tokens.css';

const meta: Meta<typeof CheckList> = {
  title: 'Components/List',
  component: CheckList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckListDefault: Story = {
  args: {
    items: [
      'Any country: US, MX, CO, AR, BR, EU...',
      'Any document type: PDF, image, scan',
      'Instant validation with tax authorities',
    ],
    iconColor: 'green',
  },
  name: 'CheckList - Green',
};

export const CheckListGray: Story = {
  args: {
    items: [
      'Basic feature included',
      'Standard support',
      'Community access',
    ],
    iconColor: 'gray',
  },
  name: 'CheckList - Gray',
};

export const CheckListSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#737373' }}>Small</p>
        <CheckList
          size="sm"
          items={['First item', 'Second item', 'Third item']}
        />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#737373' }}>Medium (default)</p>
        <CheckList
          size="md"
          items={['First item', 'Second item', 'Third item']}
        />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#737373' }}>Large</p>
        <CheckList
          size="lg"
          items={['First item', 'Second item', 'Third item']}
        />
      </div>
    </div>
  ),
  name: 'CheckList - Sizes',
};

export const CheckListSpacing: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '48px' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#737373' }}>Tight</p>
        <CheckList
          spacing="tight"
          items={['Item one', 'Item two', 'Item three']}
        />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#737373' }}>Normal</p>
        <CheckList
          spacing="normal"
          items={['Item one', 'Item two', 'Item three']}
        />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#737373' }}>Loose</p>
        <CheckList
          spacing="loose"
          items={['Item one', 'Item two', 'Item three']}
        />
      </div>
    </div>
  ),
  name: 'CheckList - Spacing',
};

export const BulletList: Story = {
  render: () => (
    <List variant="bullet">
      <ListItem>First bullet point</ListItem>
      <ListItem>Second bullet point</ListItem>
      <ListItem>Third bullet point</ListItem>
    </List>
  ),
  name: 'Bullet List',
};

export const NumberedList: Story = {
  render: () => (
    <List variant="number">
      <ListItem>Upload your document</ListItem>
      <ListItem>Wait for processing</ListItem>
      <ListItem>Review extracted data</ListItem>
    </List>
  ),
  name: 'Numbered List',
};

export const FeaturesExample: Story = {
  render: () => (
    <div style={{
      backgroundColor: '#F7F7F5',
      padding: '48px',
      borderRadius: '16px',
      maxWidth: '600px'
    }}>
      <CheckList
        items={[
          'Any country: US, MX, CO, AR, BR, EU...',
          'Any document type: PDF, image, scan',
          'Instant validation with tax authorities',
        ]}
        iconColor="green"
        size="lg"
        spacing="loose"
      />
    </div>
  ),
  name: 'Features Section',
  parameters: {
    backgrounds: { default: 'light' },
  },
};
