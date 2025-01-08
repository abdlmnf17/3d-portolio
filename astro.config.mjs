import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
 
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    optimizeDeps: {
      include: ['framer-motion', 'lucide-react']
    }
  }, 

  site: 'https://abdlmnf17.github.io',
  base: '/3d-portolio/',  
});
