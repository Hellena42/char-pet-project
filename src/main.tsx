import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'
import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

async function enableMocking() {
  if (import.meta.env.MODE !== 'development') {
    return
  }

  const { worker } = await import('./shared/api/mock/browser.ts')
  
  return worker.start({
    onUnhandledRequest: 'bypass',
  })
}

const root = createRoot(document.getElementById('root')!)

enableMocking().then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
