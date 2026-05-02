import { cva, type VariantProps } from 'class-variance-authority';

export const sidebarItemVariants = cva(
  'flex items-center gap-2 rounded-lg transition-all duration-200 outline-none select-none cursor-pointer tracking-widest px-3 py-3 text-sm font-light',
  {
    variants: {
      variant: {
        ghost: 'text-white/70 hover:bg-orange-600/40 hover:text-white',
        solid: 'bg-orange-600 text-white shadow-sm',
      },
      active: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'ghost',
        active: true,
        className: 'bg-orange-600/80 text-white',
      },
    ],
    defaultVariants: {
      variant: 'ghost',
      active: false,
    },
  }
);

export type SidebarItemVariants = VariantProps<typeof sidebarItemVariants>;

export const sidebarTreeVariants = cva('flex flex-col w-full gap-1');

export const sidebarTreeContentVariants = cva(
  'overflow-hidden flex flex-col gap-1 ml-5 pl-4 pr-2 border-l border-white/20'
);
