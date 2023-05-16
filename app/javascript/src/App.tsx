import React from 'react'
import { createRoot } from 'react-dom/client';
import AppRoutes from './AppRoutes';

document.addEventListener('DOMContentLoaded', () => {
  const appRoot = createRoot(document.getElementById('root'));
  appRoot.render(
    <AppRoutes/>
  )
})
