import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils';
import { tabsListVariants, tabsTriggerVariants } from './tabs.variants';

// Context for state management
interface TabsContextProps {
  value?: string;
  onValueChange?: (value: string) => void;
  variant?: 'default' | 'pill';
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a TabsRoot');
  }
  return context;
}

// 1. Root Component
export interface GTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  variant?: 'default' | 'pill';
}

export function GTabsRoot({
  defaultValue,
  value: controlledValue,
  onValueChange,
  variant = 'default',
  children,
  className,
  ...props
}: GTabsProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const value = controlledValue ?? uncontrolledValue;

  const handleValueChange = (newValue: string) => {
    setUncontrolledValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value, onValueChange: handleValueChange, variant }}>
      <div className={cn('w-full', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

// 2. List Component (Container)
export function GTabsList({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(tabsListVariants(), className)} {...props}>
      {children}
    </div>
  );
}

// 3. Trigger Component (Button)
export interface GTabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function GTabsTrigger({ value: triggerValue, className, children, ...props }: GTabsTriggerProps) {
  const { value: activeValue, onValueChange } = useTabs();
  const isActive = activeValue === triggerValue;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={() => onValueChange?.(triggerValue)}
      className={cn(tabsTriggerVariants({ active: isActive }), className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {isActive && (
        <motion.div
          layoutId="active-tabs-indicator"
          className="absolute inset-0 z-0 rounded-md bg-white shadow-sm ring-1 ring-stone-950/5"
          transition={{
            type: 'spring',
            bounce: 0.25,
            stiffness: 300,
            damping: 25,
          }}
        />
      )}
    </button>
  );
}

// 4. Content Component (Panel)
export interface GTabsContentProps extends HTMLMotionProps<'div'> {
  value: string;
}

export function GTabsContent({ value: contentValue, className, children, ...props }: GTabsContentProps) {
  const { value: activeValue } = useTabs();

  if (activeValue !== contentValue) return null;

  return (
    <motion.div
      key={contentValue}
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      role="tabpanel"
      className={cn('mt-4 focus-visible:outline-none', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Alias for cleaner usage
export const GTabs = {
  Root: GTabsRoot,
  List: GTabsList,
  Trigger: GTabsTrigger,
  Content: GTabsContent,
};
