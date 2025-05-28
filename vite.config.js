import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // server: {
  //   port: 3000,
  //   host: 'localhost',
  //   open: true, // Automatically open the browser
  //   strictPort: true, // Prevents the server from starting if the port is already in use
  // },
})
