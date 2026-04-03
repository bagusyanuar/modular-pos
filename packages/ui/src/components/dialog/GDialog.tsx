import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { LuX } from 'react-icons/lu';
import { cn } from '../../utils';
import {
  dialogOverlayVariants,
  dialogContentVariants,
  dialogHeaderVariants,
  dialogFooterVariants,
  dialogTitleVariants,
  dialogDescriptionVariants,
} from './gdialog.variants';

const GDialog = DialogPrimitive.Root;

const GDialogTrigger = DialogPrimitive.Trigger;

const GDialogPortal = DialogPrimitive.Portal;

const GDialogClose = DialogPrimitive.Close;

const GDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(dialogOverlayVariants(), className)}
    {...props}
  />
));
GDialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const GDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <GDialogPortal>
    <GDialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(dialogContentVariants(), className)}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-6 top-6 rounded-xl p-2 text-gray-400 opacity-70 transition-all hover:bg-gray-100 hover:text-gray-900 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:pointer-events-none">
        <LuX className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </GDialogPortal>
));
GDialogContent.displayName = DialogPrimitive.Content.displayName;

const GDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(dialogHeaderVariants(), className)}
    {...props}
  />
);
GDialogHeader.displayName = 'GDialogHeader';

const GDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(dialogFooterVariants(), className)}
    {...props}
  />
);
GDialogFooter.displayName = 'GDialogFooter';

const GDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(dialogTitleVariants(), className)}
    {...props}
  />
));
GDialogTitle.displayName = DialogPrimitive.Title.displayName;

const GDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(dialogDescriptionVariants(), className)}
    {...props}
  />
));
GDialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  GDialog,
  GDialogPortal,
  GDialogOverlay,
  GDialogTrigger,
  GDialogClose,
  GDialogContent,
  GDialogHeader,
  GDialogFooter,
  GDialogTitle,
  GDialogDescription,
};
