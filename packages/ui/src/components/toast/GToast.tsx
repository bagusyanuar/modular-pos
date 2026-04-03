import { Toaster as Sonner } from 'sonner';
import React from 'react';
import {
  LuCircleCheck,
  LuCircleAlert,
  LuTriangleAlert,
  LuInfo,
} from 'react-icons/lu';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const GToast = ({ position = 'top-center', ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      position={position}
      icons={{
        success: <LuCircleCheck className="size-4" />,
        error: <LuCircleAlert className="size-4" />,
        warning: <LuTriangleAlert className="size-4" />,
        info: <LuInfo className="size-4" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            'toast group-[.toaster]:bg-white group-[.toaster]:text-neutral-950 group-[.toaster]:border-neutral-200 group-[.toaster]:shadow-xl group-[.toaster]:rounded-xl group-[.toaster]:p-4 group-[.toaster]:gap-3',
          description: 'group-[.toast]:text-neutral-500 group-[.toast]:text-xs',
          actionButton:
            'group-[.toast]:bg-orange-500 group-[.toast]:text-white group-[.toast]:font-medium',
          cancelButton:
            'group-[.toast]:bg-neutral-100 group-[.toast]:text-neutral-500 group-[.toast]:font-medium',
          success: '!border-green-500 !text-green-600 !bg-green-50',
          error: '!border-red-500 !text-red-600 !bg-red-50',
          warning: '!border-amber-500 !text-amber-600 !bg-amber-50',
          info: '!border-blue-500 !text-blue-600 !bg-blue-50',
        },
      }}
      {...props}
    />
  );
};

export default GToast;
export { GToast };
