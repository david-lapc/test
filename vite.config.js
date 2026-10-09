import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = repository ? `/${repository}/` : '/'

export default defineConfig({
    base,
    plugins: [vue()],
})