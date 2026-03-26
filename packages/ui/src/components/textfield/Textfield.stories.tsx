import type { Meta, StoryObj } from '@storybook/react';
import { LuMail } from 'react-icons/lu';
import Textfield from './Textfield';

const meta: Meta<typeof Textfield> = {
  title: 'Components/Textfield',
  component: Textfield,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isError: {
      control: 'boolean',
      description: 'Determines if the textfield is in an error state',
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    isError: false,
    disabled: false,
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: 'Error textfield...',
    isError: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textfield...',
    disabled: true,
  },
};

export const WithPrefixIcon: Story = {
  args: {
    placeholder: 'Email address...',
    prefixIcon: LuMail,
  },
  parameters: {
    docs: {
      source: {
        code: `import { LuMail } from 'react-icons/lu';
import { Textfield } from '@genpos/ui/textfield';

<Textfield 
  placeholder="Email address..." 
  prefixIcon={LuMail} 
/>`,
      },
    },
  },
};

export const WithSuffixIcon: Story = {
  args: {
    placeholder: 'Search something...',
    suffixIcon: LuMail,
  },
  parameters: {
    docs: {
      source: {
        code: `import { LuMail } from 'react-icons/lu';
import { Textfield } from '@genpos/ui/textfield';

<Textfield 
  placeholder="Search something..." 
  suffixIcon={LuMail} 
/>`,
      },
    },
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: 'Email address...',
    prefixIcon: LuMail,
    suffixIcon: LuMail,
  },
  parameters: {
    docs: {
      source: {
        code: `import { LuMail } from 'react-icons/lu';
import { Textfield } from '@genpos/ui/textfield';

<Textfield 
  placeholder="Email address..." 
  prefixIcon={LuMail} 
  suffixIcon={LuMail} 
/>`,
      },
    },
  },
};
