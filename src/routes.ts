import { createRouter, createWebHistory, RouteRecordRaw, RouteLocationNormalized } from 'vue-router'

// 1. Define route components.
// These can be imported from other files
import ContactForm from '@/views/ContactForm.vue' // no alias @ because ts doesn't support it atm
import HelloWorld from '@/views/HelloWorld.vue'
import ExampleIndex from '@/views/Example/Index.vue'
import FinancialIndex from '@/views/Financial/Index.vue'

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes: RouteRecordRaw[] = [
  { path: '/contact', component: ContactForm },
  { path: '/', component: HelloWorld, props: (route: RouteLocationNormalized) => ({ msg: route.query.msg }) },
  { path: '/example', component: ExampleIndex },
  { path: '/financial', component: FinancialIndex },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
