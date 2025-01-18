import '@radix-ui/themes/styles.css';
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';
import App from '../components/App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <Theme
          accentColor="red"
          grayColor="sand"
          panelBackground="solid"
          radius="large"
        >
          <App />
        </Theme>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
