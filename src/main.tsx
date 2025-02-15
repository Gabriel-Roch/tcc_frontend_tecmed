import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import './index.css'
import { router } from './routes/route.tsx';
import { LayoutProvider } from './context/layoutContext.tsx';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <LayoutProvider>
        <RouterProvider router={router} />
      </LayoutProvider>
    </QueryClientProvider>
  </StrictMode>,
)
