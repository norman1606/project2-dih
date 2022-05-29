<template>
    <div class="main d-flex">
        <div class="sidebar">
            <SideBar/>   
        </div>
        <div class="content-direito">
            <div class="nav-bar">
                <NavBar pagina = "CADASTRO DE ITENS"/>
            </div>
            <div class="content">
                <h1 class="mb-4 mt-5">Preencha os campos para cadastrar</h1>
                <div class="formulario">
                    <div class="dados-principais">
                        <h4 class="mb-5 mt-4">Dados Principais</h4>
                        <FormKit
                            type="form"
                            :actions="false"
                            v-model="listaItem"
                        >
                            <div class="row g-2">
                                <div class=" col-3 mb-3">
                                    <FormKit
                                        type="text"
                                        name="codigo"
                                        label="Código de Patrimônio"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation="required"
                                    />
                                </div>
                                <div class=" col-6 mb-3">
                                    <FormKit
                                        type="text"
                                        name="titulo"
                                        label="Título do Item"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation= "required"
                                        
                                    />
                                </div>
                                <div class=" col-3 mb-3">
                                    <FormKit
                                        type="select"
                                        name="categoria"
                                        label="Categoria do item"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        placeholder= "Selecione"
                                        validation= "required"
                                        :options="[
                                        'Eletrônico',
                                        'Papelaria',
                                        'Moveis',
                                        'Outros',
                                        ]"
                                    />
                                </div> 
                            </div>
                        </FormKit>
                    </div>
                    <div class="dados-complementares">
                        <h4 class="mb-4 mt-5">Dados Complementares</h4>
                        <FormKit
                            type="form"
                            :actions="false"
                            v-model="listaItem2"
                        >
                            <div class="row g-2">
                                <div class=" col-3 mb-3">
                                    <FormKit
                                        type="number"
                                        name="valor"
                                        label="Valor R$"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation="required"
                                    />
                                </div>
                                <div class=" col-9 mb-3">
                                    <FormKit
                                        type="text"
                                        name="url"
                                        label="URL da Foto"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation= "required"
                                    />
                                </div>
                                <div class=" col-6 mb-3">
                                    <FormKit
                                        type="text"
                                        name="marca"
                                        label="Marca"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation= "required"
                                    />
                                </div>
                                <div class="col-6 mb-3">
                                    <FormKit
                                        type="text"
                                        name="modelo"
                                        label="Modelo"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation= "required"
                                        
                                    />
                                </div>
                                <div class="col-12 mb-3">
                                    <FormKit
                                        type="textarea"
                                        rows="5"
                                        name="descricao"
                                        label="Descrição"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation= "required"
                                        
                                    />
                                </div>
                                <div class=" d-grid mt-3 gap-2 d-flex flex-row-reverse">
                                    <FormKit
                                        type="button"
                                        name="button"
                                        label="Salvar"
                                        input-class="btn btn-success botao-salvar"
                                        @click="salvar"
                                    />
                                    <FormKit
                                        type="button"
                                        name="button"
                                        label="Limpar"
                                        input-class="btn btn-warning botao-limpar"
                                    />
                                </div>
                            </div>
                        </FormKit>
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
            listaItem: {}
        }
    },
    components: {
        SideBar,
        NavBar
    },

    methods: {
        salvar() {
            this.$store.commit('cadastraItem', {...this.listaItem});
            console.log(this.$store.state.produto)
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

.formulario {
    border: 1px solid #d9d2d9 ;
    padding: 10px;
    box-shadow: 5px 5px #d9d2d9;
    border-radius: 10px;
}

.botao-salvar, .botao-limpar {
    padding: 5px 60px 5px 60px;
}


</style>