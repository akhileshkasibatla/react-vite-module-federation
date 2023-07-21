/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

export default defineConfig({
  server: {
    port: 5200,
    host: 'localhost'
  },

  preview: {
    port: 5300,
    host: 'localhost'
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: './src'
    }),
    federation({
      name: 'remoteApp',
      remotes: {
        remoteApp: 'http://localhost:4300/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom', 'mobx', 'mobx-react']
    })
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: './',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: './node_modules/.vitest'
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  }
});
