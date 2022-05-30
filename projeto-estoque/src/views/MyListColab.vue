<template>
    <div class="main d-flex">
        <div class="sidebar">
            <SideBar/>   
        </div>
        <div class="content-direito">
            <div class="nav-bar">
                <NavBar pagina = "LISTAGEM DE COLABORADORES"/>
            </div>
            <div class="content">
                <h1 class="mb-4 mt-5">Utilize a barra de pesquisa para buscar</h1>
                <div class="busca">
                    <FormKit
                        type="form"
                        :actions="false"
                        v-model="busca"
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
                <div class="d-flex geral-lista-colab">
                    <div class="listaColab" v-for="listaColab in listaColabs" :key="listaColab.nome">
                        <CardColab :cargo="listaColab.cargo" :email="listaColab.email"  :nome="listaColab.nome" :telefone="listaColab.telefone"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import NavBar from "../components/NavBar.vue"
import SideBar from "../components/SideBar.vue"
import CardColab from "../components/CardColab.vue"
export default {
    components: {
        SideBar,
        NavBar,
        CardColab
    },

    computed: {
        listaColabs() {
            const colabs = JSON.parse(localStorage.getItem('colaboradores'));
            if(colabs == null||colabs.length === 0) return []
            else return colabs
        }
    }
}
</script>

<style>
.content-direito {
    width: 85%;
}
.content {
    margin: 0 auto;
}
.listaColab {
    width: 25%;
}
.geral-lista-colab {
    gap: 50px;
}
</style>