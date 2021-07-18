import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/routes'
// import axios from 'axios'
import { pinia } from './store'
import './index.css'
import './icons'

const app = createApp(App).use(router).use(pinia)
// app.config.globalProperties.$http = axios
app.mount('#app')
