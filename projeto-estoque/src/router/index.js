import { createRouter, createWebHistory } from 'vue-router';

import MyLogin from '../views/MyLogin.vue';
import MyCadastro from '../views/MyCadastro.vue';
import MyInventary from '../views/MyInventary.vue';
import MyCadastColab from '../views/MyCadastColab.vue'

const routes = [
    { path: '/', component: MyLogin },
    { path: '/cadastro', component: MyCadastro},
    { path: '/inventario', component: MyInventary},
    { path:'/cadastroColab', component: MyCadastColab}

];

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router