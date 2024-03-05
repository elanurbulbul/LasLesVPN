import { defineConfig } from 'vite'
const path = require('path')

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/index.html"),
      },
      output: {
        assetFileNames: "wwwroot/[ext]/[name][extname]",
        chunkFileNames: "wwwroot/chunks/[name].js",
        entryFileNames: "wwwroot/chunks/[name].js",
      },
    },
  },
 
})