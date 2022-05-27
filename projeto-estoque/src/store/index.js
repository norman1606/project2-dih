/* eslint-disable */
import { createStore } from 'vuex';


const store = createStore ({
    state: {
         users: [],
         usuarioLogado: undefined
    },

    mutations: {
        cadastrar(state,user) {
            state.users.push(user);
        },

        logar(state,formData) {
            state.usuarioLogado = state.users.find(user => user.email == formData.email && user.password == formData.password);
            
        }
    }
})

export default store