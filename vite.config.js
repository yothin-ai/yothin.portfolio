import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tcgThailand: resolve(__dirname, 'case-studies/tcg-thailand.html'),
        fanDelivery: resolve(__dirname, 'case-studies/fan-delivery.html'),
        bmaBonbon: resolve(__dirname, 'case-studies/bma-bonbon.html'),
        kmwReport: resolve(__dirname, 'case-studies/kmw-report.html'),
      },
    },
  },
});
