import type { Meta, StoryObj } from '@storybook/react';
import GSelect from './GSelect';
import { LuSearch } from 'react-icons/lu';

const meta: Meta<typeof GSelect> = {
  title: 'Components/GSelect',
  component: GSelect,
  tags: ['autodocs'],
  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    isClearable: {
      control: 'boolean',
    },
    isSearchable: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof GSelect>;

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'mint', label: 'Mint' },
  { value: 'coffee', label: 'Coffee' },
];

export const Default: Story = {
  args: {
    options,
    placeholder: 'Select a flavor...',
  },
};

export const Disabled: Story = {
  args: {
    options,
    isDisabled: true,
    placeholder: 'Select a flavor...',
  },
};

export const Searchable: Story = {
  args: {
    options,
    isSearchable: true,
    placeholder: 'Search for a flavor...',
  },
};

export const Clearable: Story = {
  args: {
    options,
    isClearable: true,
    placeholder: 'Select and clear...',
  },
};

export const Loading: Story = {
  args: {
    options,
    isLoading: true,
    placeholder: 'Loading...',
  },
};

export const WithPrefixIcon: Story = {
  args: {
    options,
    prefixIcon: LuSearch,
    placeholder: 'Search a flavor...',
  },
};
