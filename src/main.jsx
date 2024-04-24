import { createRoot } from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react';

const reactRoot = createRoot(document.getElementById('root'));

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
