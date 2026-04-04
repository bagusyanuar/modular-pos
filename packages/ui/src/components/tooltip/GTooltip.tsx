import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { VariantProps } from 'class-variance-authority';
import { tooltipVariants } from './gtooltip.variants';
import { cn } from '../../utils';

export interface GTooltipProps extends VariantProps<typeof tooltipVariants> {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const GTooltip: React.FC<GTooltipProps> = ({
  content,
  children,
  position = 'top',
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);

  const updateCoords = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      
      let top = 0;
      let left = 0;

      // Positioning logic based on the trigger's coordinates
      switch (position) {
        case 'right':
          top = rect.top + rect.height / 2;
          left = rect.right + 8;
          break;
        case 'left':
          top = rect.top + rect.height / 2;
          left = rect.left - 8;
          break;
        case 'bottom':
          top = rect.bottom + 8;
          left = rect.left + rect.width / 2;
          break;
        default: // top
          top = rect.top - 8;
          left = rect.left + rect.width / 2;
      }

      setCoords({ top, left });
    }
  };

  useEffect(() => {
    if (isVisible) {
      window.addEventListener('scroll', updateCoords, true);
      window.addEventListener('resize', updateCoords);
    }
    return () => {
      window.removeEventListener('scroll', updateCoords, true);
      window.removeEventListener('resize', updateCoords);
    };
  }, [isVisible]);

  return (
    <div 
      ref={triggerRef}
      className="inline-flex items-center justify-center"
      onMouseEnter={() => {
        updateCoords();
        setIsVisible(true);
      }}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && coords.top !== 0 && createPortal(
        <div 
          role="tooltip"
          className={cn(
            tooltipVariants({ position }), 
            "fixed pointer-events-none opacity-100 visible scale-100", // Override variant visibility for portal
            position === 'right' && "-translate-y-1/2",
            position === 'left' && "-translate-x-full -translate-y-1/2",
            position === 'top' && "-translate-x-1/2 -translate-y-full",
            position === 'bottom' && "-translate-x-1/2",
            className
          )}
          style={{ top: coords.top, left: coords.left, zIndex: 9999 }}
        >
          {content}
        </div>,
        document.body
      )}
    </div>
  );
};

export default GTooltip;
export { GTooltip };
