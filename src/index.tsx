import '@/index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import reportWebVitals from '@/reportWebVitals';
import PageRoutes from '@/routes';
import { store } from '@/store';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PageRoutes />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
