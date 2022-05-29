<template>
    <div class="main d-flex">
        <div class="sidebar">
            <SideBar/>   
        </div>
        <div class="content-direito">
            <div class="nav-bar">
                <NavBar pagina = "EMPRÉSTIMO DE ITENS"/>
            </div>
            <div class="content">
                <h1 class="mb-4 mt-5">Utilize a barra de pesquisa para buscar</h1>
                <div class="busca">
                    <FormKit
                        type="form"
                        :actions="false"
                        v-model="listaItem"
                    >
                        <div class="row g-2">
                            <div class=" col-10 mt-4 mb-3">
                                <FormKit
                                    type="text"
                                    name="busca"
                                    placeholder="Digite o nome do Item"
                                    label-class= "form-label"
                                    input-class= "form-control"
                                    validation="required"
                                />
                            </div>
                            <div class="col-2 mt-4 mb-3">
                                <FormKit
                                    type="button"
                                    name="button"
                                    label="Buscar"
                                    input-class="btn btn-outline-secondary botao-buscar"
                                />
                            </div>
                        </div>
                    </FormKit>
                </div>
                <div class=" mt-5 tabela-itens">
                    <table class="table">
                        <thead>
                            <tr>
                               <th>Patrimônio</th> 
                               <th>Título</th> 
                               <th>Categoria</th> 
                               <th>Emprestado para</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="listaItem in listaItens" :key="listaItem.codigo">
                                <td>{{ listaItem.codigo }}</td>
                                <td>{{ listaItem.titulo }}</td>
                                <td>{{ listaItem.categoria }}</td>
                                <td>
                                    <select>
                                        <option v-for="user in usuarios" :key="user.email"> {{ user.nome }}</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
       </div>
    </div>   
</template>

<script>
import NavBar from "../components/NavBar.vue"
import SideBar from "../components/SideBar.vue"

export default {
    data() {
        return {

        }
    },
    components: {
        SideBar,
        NavBar
    },

    computed: {
            listaItens() {
                return this.$store.state.produto.lista
            },

            usuarios() {
                return this.$store.state.pessoa.users
            }
        
    },

    
}

</script>