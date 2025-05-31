import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Replace 'vue-todo-app' with your repo name
export default defineConfig({
  base: '/vue-todo-app/',
  plugins: [vue()]
})
