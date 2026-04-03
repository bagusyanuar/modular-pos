import type { Meta, StoryObj } from '@storybook/react';
import GMultiSelect from './GMultiSelect';
import { LuSearch } from 'react-icons/lu';

const meta: Meta<typeof GMultiSelect> = {
  title: 'Components/GMultiSelect',
  component: GMultiSelect,
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

type Story = StoryObj<typeof GMultiSelect>;

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
    placeholder: 'Select flavors...',
  },
};

export const Disabled: Story = {
  args: {
    options,
    isDisabled: true,
    placeholder: 'Select flavors...',
    defaultValue: [options[0], options[1]],
  },
};

export const Searchable: Story = {
  args: {
    options,
    isSearchable: true,
    placeholder: 'Search for flavors...',
  },
};

export const Clearable: Story = {
  args: {
    options,
    isClearable: true,
    placeholder: 'Select and clear...',
    defaultValue: [options[2]],
  },
};

export const WithPrefixIcon: Story = {
  args: {
    options,
    prefixIcon: LuSearch,
    placeholder: 'Search flavors...',
  },
};
