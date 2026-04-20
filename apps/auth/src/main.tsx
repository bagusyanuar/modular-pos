import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GToast } from '@genpos/ui/toast';
import { AppRoutes } from './AppRoutes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
    <GToast />
  </StrictMode>
);
