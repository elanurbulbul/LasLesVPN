import { defineConfig } from 'vite'
const path = require('path')


export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  server: {
    port: 8080,
    hot: true,
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/index.html"),
      },
     
    },
  },
 
})