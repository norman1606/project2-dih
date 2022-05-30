import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueGravatar from "vue3-gravatar";
import router from './router';

import { plugin, defaultConfig } from '@formkit/vue'


const app = createApp(App);


app.use(VueGravatar);
app.use(plugin, defaultConfig);

app.use(router);

app.use(store);

app.use(VueAxios, axios)

app.mount('#app');