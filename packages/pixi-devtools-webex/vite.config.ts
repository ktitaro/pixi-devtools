import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const baseDir = path.resolve(__dirname)
const codeDir = path.join(baseDir, 'src')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': codeDir,
        }
    }
})
