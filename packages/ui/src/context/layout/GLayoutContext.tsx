import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

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
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

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
