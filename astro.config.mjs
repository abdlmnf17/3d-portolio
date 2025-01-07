import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';
 
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    optimizeDeps: {
      include: ['framer-motion', 'lucide-react']
    }
  }
});

