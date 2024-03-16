import { App } from '@/App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/styles/global.css'

const root = document.getElementById('root')!
const wrap = (<StrictMode><App/></StrictMode>)
createRoot(root).render(wrap)
