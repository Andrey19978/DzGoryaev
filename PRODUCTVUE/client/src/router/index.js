import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/ProductCard.vue')
    },
    
    ]
})
    
export default router
    