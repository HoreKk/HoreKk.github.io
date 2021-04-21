import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.scss'
import 'virtual:windi.css'

// Router like nuxt

import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app')
