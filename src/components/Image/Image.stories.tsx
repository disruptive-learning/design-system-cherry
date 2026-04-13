import type { Meta, StoryObj } from '@storybook/react';
import { Image, Avatar } from './Image';
import '../../styles/tokens.css';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample image URLs
const sampleImage = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop';
const cherryImage = 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=400&h=400&fit=crop';
const productImage = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop';

export const Default: Story = {
  args: {
    src: sampleImage,
    alt: 'Abstract colorful artwork',
    width: 300,
    height: 300,
  },
};

export const WithCherryGlow: Story = {
  args: {
    src: cherryImage,
    alt: 'Fresh cherries',
    width: 300,
    height: 300,
    cherryGlow: true,
    radius: 'lg',
  },
  name: 'Cherry Glow Effect',
};

export const Grayscale: Story = {
  args: {
    src: productImage,
    alt: 'Product photo',
    width: 300,
    height: 300,
    grayscale: true,
  },
  name: 'Grayscale (hover for color)',
};

export const AspectRatios: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <div>
        <Image src={sampleImage} alt="1:1" aspectRatio="1/1" width={150} />
        <p style={{ textAlign: 'center', marginTop: '8px', fontSize: '12px' }}>1:1</p>
      </div>
      <div>
        <Image src={sampleImage} alt="4:3" aspectRatio="4/3" width={150} />
        <p style={{ textAlign: 'center', marginTop: '8px', fontSize: '12px' }}>4:3</p>
      </div>
      <div>
        <Image src={sampleImage} alt="16:9" aspectRatio="16/9" width={200} />
        <p style={{ textAlign: 'center', marginTop: '8px', fontSize: '12px' }}>16:9</p>
      </div>
    </div>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
      <div>
        <Image src={sampleImage} alt="None" radius="none" width={100} height={100} />
        <p style={{ textAlign: 'center', marginTop: '8px', fontSize: '12px' }}>none</p>
      </div>
      <div>
        <Image src={sampleImage} alt="Small" radius="sm" width={100} height={100} />
        <p style={{ textAlign: 'center', marginTop: '8px', fontSize: '12px' }}>sm</p>
      </div>
      <div>
        <Image src={sampleImage} alt="Medium" radius="md" width={100} height={100} />
        <p style={{ textAlign: 'center', marginTop: '8px', fontSize: '12px' }}>md</p>
      </div>
      <div>
        <Image src={sampleImage} alt="Large" radius="lg" width={100} height={100} />
        <p style={{ textAlign: 'center', marginTop: '8px', fontSize: '12px' }}>lg</p>
      </div>
      <div>
        <Image src={sampleImage} alt="Full" radius="full" width={100} height={100} />
        <p style={{ textAlign: 'center', marginTop: '8px', fontSize: '12px' }}>full</p>
      </div>
    </div>
  ),
};

export const ProductGallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '600px' }}>
      <Image src={productImage} alt="Product 1" aspectRatio="1/1" radius="lg" />
      <Image src={cherryImage} alt="Product 2" aspectRatio="1/1" radius="lg" cherryGlow />
      <Image src={sampleImage} alt="Product 3" aspectRatio="1/1" radius="lg" />
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Avatar Stories
export const AvatarDefault: Story = {
  render: () => (
    <Avatar name="John Doe" src="https://i.pravatar.cc/150?u=john" />
  ),
  name: 'Avatar - With Image',
};

export const AvatarInitials: Story = {
  render: () => (
    <Avatar name="Jane Smith" />
  ),
  name: 'Avatar - Initials',
};

export const AvatarSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar name="XS" size="xs" />
      <Avatar name="SM" size="sm" />
      <Avatar name="MD" size="md" />
      <Avatar name="LG" size="lg" />
      <Avatar name="XL" size="xl" />
    </div>
  ),
  name: 'Avatar - Sizes',
};

export const AvatarGroup: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      {['Alice', 'Bob', 'Charlie', 'Diana'].map((name, i) => (
        <div key={name} style={{ marginLeft: i > 0 ? '-8px' : 0 }}>
          <Avatar
            name={name}
            src={`https://i.pravatar.cc/150?u=${name.toLowerCase()}`}
            size="md"
          />
        </div>
      ))}
      <div style={{ marginLeft: '-8px' }}>
        <Avatar name="+5" size="md" />
      </div>
    </div>
  ),
  name: 'Avatar - Group',
};
