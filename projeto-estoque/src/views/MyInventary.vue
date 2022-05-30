<template>
    <div class="main d-flex">
        <div class="sidebar">
            <SideBar/>   
        </div>
        <div class="content-direito">
            <div class="nav-bar">
                <NavBar pagina = "INVENTÁRIO"/>
            </div>
            <div class="content">
                <h1 class="mb-4 mt-5">Estatísticas do Sistema</h1>
                <div class="dados-estat d-flex justify-content-center gap-5">
                    <CardEstat :valorEstat = 'totalColab' tituloEstat="Colaboradores"/>
                    <CardEstat :valorEstat = 'totalItens' tituloEstat="Itens"/>
                    <CardEstat :valorEstat = 'totalValor' tituloEstat="Valor em Produtos"/>
                    <CardEstat :valorEstat = 'totalEmprest' tituloEstat="Emprestimos"/>
                </div>
                <div class="busca">
                    <h4 class="mt-4">Busca de Itens</h4>
                    <FormKit
                        type="form"
                        :actions="false"
                        v-model="formData"
                    >
                        <div class="row g-2">
                            <div class=" col-10 mt-4 mb-3">
                                <FormKit
                                    type="text"
                                    name="codigo"
                                    placeholder="Digite o nome do Item"
                                    label-class= "form-label"
                                    input-class= "form-control"
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
                <div class="d-flex produto-lista">
                    <div class="dados-item mt-3" v-for="listaItem in listaItens" :key="listaItem.codigo">
                        <CardItem :imagem="listaItem.url" :descricao="listaItem.descricao" :marca="listaItem.marca" :modelo="listaItem.modelo"/>
                    </div>
                </div>
            </div>
        </div>
        
        

    </div>
    
</template>

<script>
import NavBar from "../components/NavBar.vue"
import SideBar from "../components/SideBar.vue"
import CardEstat from "../components/CardEstat.vue"
import CardItem from "../components/CardItem.vue"
export default {
    components: {
        SideBar,
        NavBar,
        CardEstat,
        CardItem
    },

    computed: {
        totalColab(){
            const userss = JSON.parse(localStorage.getItem('users'))
            if(userss == null || userss.length === 0) return 0
            else return userss.length
        },
        totalItens(){
            const items = JSON.parse(localStorage.getItem('itens'));
            if(items == null||items.length === 0) return 0
            else return items.length
        },
        totalValor(){
            const items = JSON.parse(localStorage.getItem('itens'));
            if(items == null||items.length === 0) return 0
            else return 'R$ ' + items.reduce((acc,produto)=> acc + parseFloat(produto.valor), 0) 

        },
        totalEmprest(){
            return 0
        },
        listaItens() {
            const items = JSON.parse(localStorage.getItem('itens'));
            if(items == null||items.length === 0) return []
            else return items
        }
        
    }
    
}
</script>

<style>

.sidebar {
    width: 15%;
    
}

.content-direito {
    width: 85%;
}

.content {
    margin: 0 auto;
}

.botao-buscar {
    padding: 5px 60px 5px 60px;
}

.dados-item {
    width: 25%;
}

.produto-lista{
    gap: 50px;
}


</style>