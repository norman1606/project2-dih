/* eslint-disable */
import { createStore } from 'vuex';

const usuarioModulo = {
    state: {
        users: [],
        usuarioLogado: undefined
   },

   mutations: {
       cadastrar(state,user) {
        const userss = JSON.parse(localStorage.getItem('users'))
        if(userss == null || userss.length === 0) {
           state.users.push(user);
           const usersJSON = JSON.stringify(state.users);
           localStorage.setItem('users', usersJSON)
        }
        else {
           userss.push(user);
           const usersJSON = JSON.stringify(userss);
           localStorage.setItem('users', usersJSON);

        }
       },

       logar(state,formData) {
           const userss = JSON.parse(localStorage.getItem('users'));
           state.usuarioLogado = userss.find(user => user.email == formData.email && user.password == formData.password);
           
       }
   }
}

const itemModulo = {
    state: {
        lista: []
    },

    mutations: {
        cadastraItem(state,item) {
            const items = JSON.parse(localStorage.getItem('itens'));
            if(items == null||items.length === 0) {
                state.lista.push(item);
                const itemsJSON = JSON.stringify(state.lista);
                localStorage.setItem('itens', itemsJSON);
            }
            else {
                items.push(item);
                const itemsJSON = JSON.stringify(items);
                localStorage.setItem('itens', itemsJSON);
            }
        }
    }
}
const colabModulo = {
    state: {
        lista: []
    },

    mutations: {
        cadastraColab(state,colab) {
            const colabs = JSON.parse(localStorage.getItem('colaboradores'));
            if(colabs == null||colabs.length === 0) {
                state.lista.push(colab);
                const colabsJSON = JSON.stringify(state.lista);
                localStorage.setItem('colaboradores', colabsJSON);
            }
            else {
                colabs.push(colab);
                const colabsJSON = JSON.stringify(colabs);
                localStorage.setItem('colaboradores', colabsJSON);
            }
        }
    }
}


const store = createStore ({
    modules: {
        pessoa: usuarioModulo,
        produto: itemModulo,
        colaborador: colabModulo
    }
})

export default store