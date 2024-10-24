import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    __VITE_OPTIONS_API__: 'true',
    __VITE_PROD_DEVTOOLS__: 'false',
    __VITE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
  },
})
