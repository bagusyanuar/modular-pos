import React, { createContext, useContext, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuChevronDown } from 'react-icons/lu';
import { cn } from '../../utils';
import { collapsibleVariants, collapsibleTriggerVariants } from './gcollapsible.variants';

interface CollapsibleContextProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const CollapsibleContext = createContext<CollapsibleContextProps | undefined>(undefined);

const useCollapsible = () => {
  const context = useContext(CollapsibleContext);
  if (!context) {
    throw new Error('GCollapsible components must be wrapped in <GCollapsible />');
  }
  return context;
};

interface GCollapsibleProps {
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export const GCollapsible: React.FC<GCollapsibleProps> & {
  Trigger: React.FC<GCollapsibleTriggerProps>;
  Content: React.FC<GCollapsibleContentProps>;
} = ({ children, defaultOpen = false, className }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <CollapsibleContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={cn(collapsibleVariants({ status: isOpen ? 'open' : 'closed' }), className)}>
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
};

interface GCollapsibleTriggerProps {
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
}

export const GCollapsibleTrigger: React.FC<GCollapsibleTriggerProps> = ({ 
  children, 
  className,
  showIcon = true 
}) => {
  const { isOpen, setIsOpen } = useCollapsible();

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={cn(collapsibleTriggerVariants({ status: isOpen ? 'open' : 'closed' }), className)}
    >
      <div className="flex-1">{children}</div>
      {showIcon && (
        <LuChevronDown
          className={cn(
            'w-5 h-5 text-stone-400 transition-transform duration-300',
            isOpen && 'rotate-180 text-orange-500'
          )}
        />
      )}
    </button>
  );
};

interface GCollapsibleContentProps {
  children: ReactNode;
  className?: string;
}

export const GCollapsibleContent: React.FC<GCollapsibleContentProps> = ({ children, className }) => {
  const { isOpen } = useCollapsible();

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="overflow-hidden"
        >
          <div className={cn('p-4 pt-0 text-stone-600 text-sm leading-relaxed border-t border-orange-100 bg-stone-50/50', className)}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

GCollapsible.Trigger = GCollapsibleTrigger;
GCollapsible.Content = GCollapsibleContent;

export default GCollapsible;
