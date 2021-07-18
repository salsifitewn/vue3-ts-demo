import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/routes'
// import axios from 'axios'
import './index.css'
import './icons'
import { createPinia } from 'pinia'

const app = createApp(App).use(router).use(createPinia())
// app.config.globalProperties.$http = axios
app.mount('#app')
