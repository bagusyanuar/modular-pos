import type { Meta, StoryObj } from '@storybook/react';
import { LuPlus } from 'react-icons/lu';
import GButton from './GButton';

const meta: Meta<typeof GButton> = {
  title: 'Components/GButton',
  component: GButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline', 'ghost', 'destructive', 'secondary'],
      description: 'Gaya visual tombol',
      table: {
        type: { summary: "'primary' | 'outline' | 'ghost' | 'destructive' | 'secondary'" },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Class CSS tambahan untuk tombol',
    },
    prefixIcon: {
      options: ['PlusIcon', 'None'],
      mapping: { PlusIcon: LuPlus, None: undefined },
      control: { type: 'select' },
      description: 'Icon yang tampil sebelum teks (menggunakan react-icons/lu)',
    },
    suffixIcon: {
      options: ['PlusIcon', 'None'],
      mapping: { PlusIcon: LuPlus, None: undefined },
      control: { type: 'select' },
      description: 'Icon yang tampil sesudah teks (menggunakan react-icons/lu)',
    },
    children: {
      control: { type: 'text' },
      description: 'Konten di dalam tombol',
    },
  },
};

export default meta;
type Story = StoryObj<typeof GButton>;

export const Primary: Story = {
  args: {
    children: 'Tombol Utama',
    variant: 'primary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Tombol Outline',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Tombol Ghost',
    variant: 'ghost',
  },
};

export const WithPrefixIcon: Story = {
  args: {
    children: 'Tombol dengan Ikon',
    variant: 'primary',
    prefixIcon: LuPlus,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tombol dengan prefix icon menggunakan `react-icons/lu`.',
      },
      source: {
        code: `import { LuPlus } from 'react-icons/lu';
import { GButton } from '@genpos/ui';

<GButton
  prefixIcon={LuPlus}
  variant="primary"
>
  Tombol dengan Ikon
</GButton>`,
      },
    },
  },
};

export const WithSuffixIcon: Story = {
  args: {
    children: 'Tombol dengan Ikon',
    variant: 'primary',
    suffixIcon: LuPlus,
  },
  parameters: {
    docs: {
      source: {
        code: `import { LuPlus } from 'react-icons/lu';
import { GButton } from '@genpos/ui';

<GButton
  suffixIcon={LuPlus}
  variant="primary"
>
  Tombol dengan Ikon
</GButton>`,
      },
    },
  },
};

export const Loading: Story = {
  args: {
    children: 'Sedang Memproses',
    variant: 'primary',
    loading: true,
    loadingText: 'Memproses...',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Tombol Mati',
    variant: 'primary',
    disabled: true,
  },
};

export const Clicked: Story = {
  args: {
    children: 'Klik Saya',
    variant: 'primary',
    onClick: () => alert('Tombol diklik!'),
  },
};
