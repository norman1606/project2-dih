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
                    <CardEstat/>
                    <CardEstat/>
                    <CardEstat/>
                    <CardEstat/>
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
                <div class="dados-item mt-3">
                    <CardItem/>
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


</style>