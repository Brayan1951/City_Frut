import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  build: {
    rollupOptions:{
      output:{
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }

    },
    // Desactiva la generación de hashes para los nombres de archivo
    // de las imágenes
    assetsInlineLimit: 0,
    assetFileNames: 'assets/[name].[ext]' 
  }
})
