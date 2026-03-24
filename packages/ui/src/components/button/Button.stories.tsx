import type { Meta, StoryObj } from '@storybook/react';
import { FaPlus } from 'react-icons/fa';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline', 'ghost'],
      description: 'The visual style of the button',
      table: {
        type: { summary: "'primary' | 'outline' | 'ghost'" },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes to apply to the button',
    },
    prefixIcon: {
      options: ['FaPlus', 'None'],
      mapping: { FaPlus: FaPlus, None: undefined },
      control: { type: 'select' },
      description:
        'Icon to display before the button text, using the react-icons component library',
    },
    suffixIcon: {
      options: ['FaPlus', 'None'],
      mapping: { FaPlus: FaPlus, None: undefined },
      control: { type: 'select' },
      description:
        'Icon to display after the button text, using the react-icons component library',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
  },
};

export const Outline: Story = {
  args: {
    text: 'Outline Button',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    text: 'Ghost Button',
    variant: 'ghost',
  },
};

export const WithPrefixIcon: Story = {
  args: {
    text: 'Button with Icon',
    variant: 'primary',
    prefixIcon: FaPlus,
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with a prefix icon using `react-icons`.',
      },
      source: {
        code: `import { FaPlus } from 'react-icons/fa';

<Button
  prefixIcon={FaPlus}
  text="Button with Icon"
  variant="primary"
/>`,
      },
    },
  },
};

export const WithSuffixIcon: Story = {
  args: {
    text: 'Button with Icon',
    variant: 'primary',
    suffixIcon: FaPlus,
  },
  parameters: {
    docs: {
      source: {
        code: `import { FaPlus } from 'react-icons/fa';
import Button from './Button';

<Button
  suffixIcon={FaPlus}
  text="Button with Icon"
  variant="primary"
/>`,
      },
    },
  },
};

export const Loading: Story = {
  args: {
    text: 'Loading Button',
    variant: 'primary',
    loading: true,
    loadingText: 'processing...',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const Clicked: Story = {
  args: {
    text: 'Click Me',
    variant: 'primary',
    onClick: () => alert('button clicked'),
  },
};
