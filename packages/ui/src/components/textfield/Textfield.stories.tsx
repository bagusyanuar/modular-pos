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
        prefixIcon: LuMail
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
