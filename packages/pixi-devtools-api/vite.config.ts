import path from 'path'
import types from 'vite-plugin-dts'
import { defineConfig } from 'vite'

const baseDir = path.resolve(__dirname, 'src')
const entryFile = path.join(baseDir, 'index.ts')

export default defineConfig({
    plugins: [types()],
    build: {
        sourcemap: true,
        emptyOutDir: true,
        lib: {
            entry: entryFile,
            formats: ['es'],
        },
        rollupOptions: {
            external: ['pixi.js'],
        },
    },
})