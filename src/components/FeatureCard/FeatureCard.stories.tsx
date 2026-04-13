import type { Meta, StoryObj } from '@storybook/react';
import { FeatureCard, FeatureGrid } from './FeatureCard';
import { Heading, Text } from '../Typography';
import { Button } from '../Button';
import '../../styles/tokens.css';

const meta: Meta<typeof FeatureCard> = {
  title: 'Components/FeatureCard',
  component: FeatureCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'document',
    title: 'Drop it. Done.',
    description: 'Drop a document. Cherry reads, validates, acts. No buttons. No forms. Just done.',
  },
};

export const AllFeatures: Story = {
  render: () => (
    <FeatureGrid columns={3}>
      <FeatureCard
        icon="document"
        title="Drop it. Done."
        description="Drop a document. Cherry reads, validates, acts. No buttons. No forms. Just done."
      />
      <FeatureCard
        icon="globe"
        title="Global from Day One"
        description="US, Mexico, Brazil, EU. One agent knows every jurisdiction. Files in the right format, right portal, right time."
      />
      <FeatureCard
        icon="lightning"
        title="Invoices? Already Sent."
        description="Payment lands in your account? Cherry already generated the compliant invoice and sent it. You didn't ask."
      />
      <FeatureCard
        icon="clock"
        title="$0 Late Fees. Guaranteed."
        description="Every deadline tracked. Every filing on time. Every country covered. Zero stress."
      />
      <FeatureCard
        icon="card"
        title="Books Always Closed"
        description="Transactions matched in real-time. Your books are always closed, always accurate."
      />
      <FeatureCard
        icon="moon"
        title="Works While You Sleep"
        description="3 AM tax portal update? Cherry caught it. New compliance requirement? Already handled. Your fiscal ops never stop."
      />
    </FeatureGrid>
  ),
  name: 'Feature Grid (Cherry Style)',
  parameters: {
    layout: 'fullscreen',
  },
};

export const TwoColumns: Story = {
  render: () => (
    <FeatureGrid columns={2}>
      <FeatureCard
        icon="document"
        title="Document Processing"
        description="Automatic extraction and validation of any fiscal document."
      />
      <FeatureCard
        icon="globe"
        title="Multi-jurisdiction"
        description="Support for US, Mexico, Brazil, EU, and more."
      />
      <FeatureCard
        icon="lightning"
        title="Real-time Sync"
        description="Instant synchronization with tax authorities."
      />
      <FeatureCard
        icon="clock"
        title="Deadline Tracking"
        description="Never miss a filing deadline again."
      />
    </FeatureGrid>
  ),
  name: 'Two Columns',
  parameters: {
    layout: 'fullscreen',
  },
};

export const FullPageSection: Story = {
  render: () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ padding: '64px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: '600px' }}>
          <Heading as="h1" size="3xl" weight="medium">
            Everything. Automated.
          </Heading>
          <Text variant="muted" size="lg" style={{ marginTop: '16px' }}>
            From document processing to tax filing. Cherry handles your entire fiscal operation so you can focus on building.
          </Text>
        </div>
        <Button variant="primary" size="lg">
          Join Waitlist
        </Button>
      </div>

      {/* Features Grid */}
      <FeatureGrid columns={3}>
        <FeatureCard
          icon="document"
          title="Drop it. Done."
          description="Drop a document. Cherry reads, validates, acts. No buttons. No forms. Just done."
        />
        <FeatureCard
          icon="globe"
          title="Global from Day One"
          description="US, Mexico, Brazil, EU. One agent knows every jurisdiction. Files in the right format, right portal, right time."
        />
        <FeatureCard
          icon="lightning"
          title="Invoices? Already Sent."
          description="Payment lands in your account? Cherry already generated the compliant invoice and sent it. You didn't ask."
        />
        <FeatureCard
          icon="clock"
          title="$0 Late Fees. Guaranteed."
          description="Every deadline tracked. Every filing on time. Every country covered. Zero stress."
        />
        <FeatureCard
          icon="card"
          title="Books Always Closed"
          description="Transactions matched in real-time. Your books are always closed, always accurate."
        />
        <FeatureCard
          icon="moon"
          title="Works While You Sleep"
          description="3 AM tax portal update? Cherry caught it. New compliance requirement? Already handled. Your fiscal ops never stop."
        />
      </FeatureGrid>
    </div>
  ),
  name: 'Full Page Section',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
  },
};
