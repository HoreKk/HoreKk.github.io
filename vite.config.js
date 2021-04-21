import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

// Vite plugins
import WindiCSS from 'vite-plugin-windicss'
import Pages from 'vite-plugin-pages';
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'

export default defineConfig({
  plugins: [
    Vue(), 
    WindiCSS(),
    Pages(), 
    ViteComponents({
      customComponentResolvers: ViteIconsResolver()
    }),
    ViteIcons(),
  ],
})
