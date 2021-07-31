import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.scss'
import 'virtual:windi.css'
import 'vue-global-api'

// Axios
import VueAxios from 'vue-axios'
import axios from 'axios'

// Router like nuxt
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

const app = createApp(App).use(router)
app.use(VueAxios, axios).provide('axios', app.config.globalProperties.axios)
app.mount('#app')
