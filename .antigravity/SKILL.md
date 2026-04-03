---
name: create_component
description: Pedoman membuat reusable component menggunakan Tailwind V4 dan class-variance-authority (CVA)
---

# 🛠️ Skill: Membuat Component dengan CVA & Tailwind v4

Sebagai Senior Frontend Engineer, kamu diwajibkan mengikuti standar ini saat membuat atau merefactor sebuah UI component di dalam monorepo (terutama di `packages/ui`).

## 🎯 Aturan Utama

1. **Tech Stack**: Gunakan React (TypeScript), `class-variance-authority` (CVA), `tailwind-merge`, `clsx`, dan Tailwind CSS v4.
2. **Lokasi File**: Letakkan component di direktori yang tepat (misal: `packages/ui/src/components/[nama-komponen]/`).
3. **Pemisahan Logika**:
 ### 🔑 Aturan Ekstra: Pemisahan Variant

Wajib memisahkan definisi varian CVA ke dalam file terpisah dengan ekstensi `.variants.ts` (misal: `gbutton.variants.ts`). Ini penting agar varian bisa di-share atau digunakan ulang tanpa harus mengimpor komponen utamanya.

## 🧑‍💻 Contoh Implementasi (Reference)

Berikut adalah struktur standar saat membuat component (Contoh: Button):

**1. Buat file `gbutton.variants.ts` untuk definisi style:**
```tsx
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
```

**2. Buat file utamanya `GButton.tsx`:**
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
GButton.displayName = 'GButton';

export default GButton;
export { GButton };
```

## ✅ Ceklist Sebelum Selesai:
- [ ] Export component dan variant (berguna jika app lain mau copy style).
- [ ] Beri nama component sesuai konvensi (`PascalCase` dengan awalan spesifik jika ada, seperti `G` untuk `GButton`).
- [ ] Pastikan tidak ada tipe `any`.
- [ ] Gunakan `cn()` untuk menghindari bentrok class dari Tailwind v4.
