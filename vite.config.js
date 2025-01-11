import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "assets": "/src/assets",
      "components": "/src/components",
      "MenuLink": "/src/components/MenuLink",
      "paginas": "/src/paginas",
      "NovoVideo": "/src/paginas/NovoVideo",
      "Logo": "/src/assets/logo.png",
      "handleSubmit": "components/Videos/AdicionarVideos"
      }
    }
  })
