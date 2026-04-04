---
name: create_component
description: Pedoman CVA + Tailwind v4 + Variant Separation
---

# 🛠️ Skill: CVA & Tailwind v4 Patterns

Fokus: Implementasi teknis komponen di `packages/ui`.

### 🔑 Core Pattern: Separate Variants
Wajib memisahkan CVA ke file `.variants.ts` agar *style* bisa dipakai tanpa mengimpor komponen utama.

**1. `gbutton.variants.ts` (Style Definition):**
```tsx
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);
```

**2. `GButton.tsx` (Component Logic):**
```tsx
import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './gbutton.variants';
import { cn } from '../../utils/cn'; 

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const GButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
GButton.displayName = 'GButton';
export { GButton, buttonVariants };
```

### ✅ Technical Checklist:
- [ ] Pisahkan file `.variants.ts`.
- [ ] Gunakan `cn()` untuk *class merging*.
- [ ] Export komponen DAN varian secara terpisah.
