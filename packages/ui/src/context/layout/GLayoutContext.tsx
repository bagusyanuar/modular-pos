import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { useBreakpoint } from '../../hooks';

interface GLayoutContextType {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  toggleSidebar: () => void;
}

const GLayoutContext = createContext<GLayoutContextType | undefined>(undefined);

export const GLayoutProvider: React.FC<{ children: ReactNode; defaultCollapsed?: boolean }> = ({
  children,
  defaultCollapsed = false,
}) => {
  const isLg = useBreakpoint('lg');
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  // Auto-collapse when screen size is less than LG (1024px)
  useEffect(() => {
    if (!isLg) {
      setCollapsed(true);
    }
  }, [isLg]);

  const toggleSidebar = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <GLayoutContext.Provider value={{ collapsed, setCollapsed, toggleSidebar }}>
      {children}
    </GLayoutContext.Provider>
  );
};

export const useGLayout = () => {
  const context = useContext(GLayoutContext);
  if (context === undefined) {
    throw new Error('useGLayout must be used within a GLayoutProvider');
  }
  return context;
};

export default GLayoutContext;
