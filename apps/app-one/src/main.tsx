import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { ThemeProvider } from '@monorepo-example/ui';
import { themeAlpha } from '@monorepo-example/theme-alpha';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ThemeProvider theme={themeAlpha}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
