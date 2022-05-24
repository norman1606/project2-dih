import { createRouter, createWebHistory } from 'vue-router';

import MyLogin from '../views/MyLogin.vue';

const routes = [
    { path: '/', component: MyLogin }
];

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router