import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './Routes.jsx'
import { VideoProvider } from 'context/VideoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VideoProvider>
      <AppRoutes />
    </VideoProvider>
  </StrictMode>,
)
