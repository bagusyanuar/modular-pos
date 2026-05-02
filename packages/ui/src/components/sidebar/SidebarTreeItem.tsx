import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuChevronDown } from 'react-icons/lu';
import { sidebarTreeVariants, sidebarTreeContentVariants } from './sidebar.variants';
import SidebarItem from './SidebarItem';

interface SidebarTreeItemProps {
  icon?: React.ElementType;
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const SidebarTreeItem: React.FC<SidebarTreeItemProps> = ({
  icon,
  label,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={sidebarTreeVariants()}>
      <SidebarItem
        as="button"
        icon={icon}
        label={label}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="ml-auto flex items-center justify-center"
        >
          <LuChevronDown className="h-4 w-4" />
        </motion.div>
      </SidebarItem>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={sidebarTreeContentVariants()}
          >
            <div className="flex flex-col gap-1 py-1">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarTreeItem;
