import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { PLACES_COUNT } from './consts.tsx';
import { offers } from './mocks/offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesCount={PLACES_COUNT}
      offers={offers}
    />
  </React.StrictMode>
);
