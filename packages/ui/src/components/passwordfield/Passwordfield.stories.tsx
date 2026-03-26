import type { Meta, StoryObj } from '@storybook/react';
import { LuLock } from 'react-icons/lu';
import Passwordfield from './Passwordfield';

const meta: Meta<typeof Passwordfield> = {
  title: 'Components/Passwordfield',
  component: Passwordfield,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isError: {
      control: 'boolean',
      description: 'Determines if the passwordfield is in an error state',
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Passwordfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter password...',
    isError: false,
    disabled: false,
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: 'Error password...',
    isError: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled password...',
    disabled: true,
  },
};

export const WithPrefixIcon: Story = {
  args: {
    placeholder: 'Password...',
    prefixIcon: LuLock,
  },
  parameters: {
    docs: {
      source: {
        code: `import { LuLock } from 'react-icons/lu';
import { Passwordfield } from '@genpos/ui/passwordfield';

<Passwordfield 
  placeholder="Password..." 
  prefixIcon={LuLock} 
/>`,
      },
    },
  },
};
