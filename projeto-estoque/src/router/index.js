import { createRouter, createWebHistory } from 'vue-router';

import MyLogin from '../views/MyLogin.vue';
import MyCadastro from '../views/MyCadastro.vue';

const routes = [
    { path: '/', component: MyLogin },
    { path: '/cadastro', component: MyCadastro}

];

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router