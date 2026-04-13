import type { Meta, StoryObj } from '@storybook/react';
import { Heading, Text, Code, Label, Subtitle } from './Typography';
import { CheckList } from '../List';
import { Button } from '../Button';
import '../../styles/tokens.css';

const meta: Meta<typeof Heading> = {
  title: 'Components/Typography',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FontUsage: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <div style={{ padding: '16px', backgroundColor: 'var(--gray-50)', borderRadius: '8px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--gray-500)', marginBottom: '8px' }}>GEIST MONO - Títulos, destacados, botones</p>
        <Heading size="2xl">Everything. Automated.</Heading>
      </div>
      <div style={{ padding: '16px', backgroundColor: 'var(--gray-50)', borderRadius: '8px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--gray-500)', marginBottom: '8px' }}>GEIST SANS - Párrafos, descripciones</p>
        <Text size="lg">From document processing to tax filing. Cherry handles your entire fiscal operation so you can focus on building.</Text>
      </div>
    </div>
  ),
  name: 'Font Usage Guide',
};

export const HeadingDefault: Story = {
  args: {
    children: 'Everything. Automated.',
    size: '3xl',
    weight: 'medium',
  },
  name: 'Heading (Geist Mono)',
};

export const HeadingSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Heading size="4xl">Heading 4XL - 64px</Heading>
      <Heading size="3xl">Heading 3XL - 48px</Heading>
      <Heading size="2xl">Heading 2XL - 40px</Heading>
      <Heading size="xl">Heading XL - 32px</Heading>
      <Heading size="lg">Heading LG - 24px</Heading>
      <Heading size="md">Heading MD - 20px</Heading>
      <Heading size="sm">Heading SM - 16px</Heading>
      <Heading size="xs">Heading XS - 14px</Heading>
    </div>
  ),
  name: 'Heading - Sizes',
};

export const HeadingWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Heading size="xl" weight="light">Light Weight (300)</Heading>
      <Heading size="xl" weight="normal">Normal Weight (400)</Heading>
      <Heading size="xl" weight="medium">Medium Weight (500)</Heading>
      <Heading size="xl" weight="semibold">Semibold Weight (600)</Heading>
    </div>
  ),
  name: 'Heading - Weights',
};

export const HeadingFonts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Heading size="xl">Geist Mono (default for headings)</Heading>
      <Heading size="xl" sans>Geist Sans (optional)</Heading>
    </div>
  ),
  name: 'Heading - Mono vs Sans',
};

export const LabelDefault: Story = {
  render: () => (
    <Label>Step 01</Label>
  ),
  name: 'Label (Geist Mono)',
};

export const LabelSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Label size="sm">Step 01 (small)</Label>
      <Label size="md">Step 02 (medium)</Label>
      <Label size="lg">Step 03 (large)</Label>
    </div>
  ),
  name: 'Label - Sizes',
};

export const SubtitleDefault: Story = {
  render: () => (
    <Subtitle size="lg">That's all we need.</Subtitle>
  ),
  name: 'Subtitle (Geist Mono, muted)',
};

export const TextDefault: Story = {
  render: () => (
    <Text style={{ maxWidth: '500px' }}>
      Drop any fiscal document. Cherry extracts your entire fiscal identity and starts working. Your last manual input, ever.
    </Text>
  ),
  name: 'Text (Geist Sans)',
};

export const TextVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Text variant="default">Default text color (foreground)</Text>
      <Text variant="muted">Muted text color (gray-600)</Text>
      <Text variant="subtle">Subtle text color (gray-400)</Text>
    </div>
  ),
  name: 'Text - Color Variants',
};

export const TextMono: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Text>Geist Sans (default for body text)</Text>
      <Text mono>Geist Mono (for emphasis or technical text)</Text>
    </div>
  ),
  name: 'Text - Sans vs Mono',
};

export const CodeInline: Story = {
  render: () => (
    <Text>
      Install Cherry with <Code>npm install cherry-ai</Code> and get started.
    </Text>
  ),
  name: 'Code - Inline',
};

export const CodeBlock: Story = {
  render: () => (
    <Code block>
{`import { Cherry } from 'cherry-ai';

const client = new Cherry({
  apiKey: process.env.CHERRY_API_KEY
});

const result = await client.extract({
  document: './invoice.pdf'
});`}
    </Code>
  ),
  name: 'Code - Block',
};

export const TypographyHierarchy: Story = {
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      maxWidth: '600px'
    }}>
      <Label>Overline / Label (Mono)</Label>
      <Heading size="3xl" weight="medium">Main Heading (Mono)</Heading>
      <Subtitle size="lg">Supporting subtitle (Mono, muted)</Subtitle>
      <Text variant="muted" style={{ marginTop: '8px' }}>
        Body text uses Geist Sans for optimal readability in longer passages. This provides a nice contrast with the monospace headings.
      </Text>
      <Text mono size="sm" variant="subtle" style={{ marginTop: '8px' }}>
        // Technical note stays in Mono
      </Text>
    </div>
  ),
  name: 'Typography Hierarchy',
};

/* Full Page Section - Como en el diseño de Cherry */
export const FullPageSection: Story = {
  render: () => (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero Section */}
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

      {/* Step Section */}
      <div style={{ backgroundColor: '#F7F7F5', padding: '64px 48px' }}>
        <Label size="md">Step 01</Label>
        <Heading as="h2" size="3xl" weight="medium" style={{ marginTop: '24px' }}>
          5 seconds.
        </Heading>
        <Subtitle size="lg" style={{ marginTop: '8px' }}>
          That's all we need.
        </Subtitle>
        <Text variant="muted" size="lg" style={{ marginTop: '24px', maxWidth: '600px' }}>
          Drop any fiscal document. Cherry extracts your entire fiscal identity and starts working. Your last manual input, ever.
        </Text>
        <div style={{ marginTop: '32px' }}>
          <CheckList
            items={[
              'Any country: US, MX, CO, AR, BR, EU...',
              'Any document type: PDF, image, scan',
              'Instant validation with tax authorities',
            ]}
            iconColor="green"
            size="lg"
            spacing="normal"
          />
        </div>
      </div>
    </div>
  ),
  name: 'Full Page Section (Cherry Style)',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
  },
};
