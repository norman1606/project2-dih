/* eslint-disable */
import { createStore } from 'vuex';

const usuarioModulo = {
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
}

const itemModulo = {
    state: {
        lista: []
    },

    mutations: {
        cadastraItem(state,item) {
            state.lista.push(item)
        }
    }
}


const store = createStore ({
    modules: {
        pessoa: usuarioModulo,
        produto: itemModulo
    }
})

export default store