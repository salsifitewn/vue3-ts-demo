import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store/index'
import './index.css'
import './icons'
createApp(App).use(router).use(store).mount('#app')
