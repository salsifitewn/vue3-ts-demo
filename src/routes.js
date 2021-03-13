import { createRouter, createWebHistory } from 'vue-router'

// 1. Define route components.
// These can be imported from other files
import ContactForm from './views/ContactForm.vue'
import HelloWorld from './views/HelloWorld.vue' // no alias @ because ts doesn't support it atm

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/contact', component: ContactForm },
  { path: '/', component: HelloWorld },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
