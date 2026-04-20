import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GToast } from '@genpos/ui/toast';
import { AppRoutes } from './AppRoutes';

import { setupGateKeeper } from '@genpos/utils';

// Paksa akses lewat gateway di mode dev
setupGateKeeper({
  gatewayPort: import.meta.env.VITE_PORT_ADMIN || '3000',
  allowedHosts: [], // Biarkan kosong agar genpos.test tetap kena redirect jika port-nya salah
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
    <GToast />
  </StrictMode>
);
