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
                                    placeholder="Digite o numero do patrimonio do Item"
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
                               <th>Visualizar</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="listaItem in listaItens" :key="listaItem.codigo">
                                <td>{{ listaItem.codigo }}</td>
                                <td>{{ listaItem.titulo }}</td>
                                <td>{{ listaItem.categoria }}</td>
                                <td>
                                    <select>
                                        <option value="default">Na Empresa</option>
                                        <option v-for="user in usuarios" :key="user.email"> {{ user.nome }}</option>
                                    </select>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                    View
                                    </button>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
                                    Excluir
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
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
                const items = JSON.parse(localStorage.getItem('itens'));
                if(items == null||items.length === 0) return []
                else return items
            },

            usuarios() {
                const userss = JSON.parse(localStorage.getItem('users'))
                if(userss == null || userss.length === 0) return 0
                else return userss
            }
        
    },

    methods: {
        excluir() {
            
        }
    }

    
}

</script>