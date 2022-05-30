<template>
    <div class="main d-flex">
        <div class="sidebar">
            <SideBar/>   
        </div>
        <div class="content">
            <div class="nav-bar">
                <NavBar pagina = "CADASTRO DE COLABORADORES"/>
            </div>
            <div class="content">
                <h1 class="mb-4 mt-5">Preencha os campos para cadastrar</h1>
                <div class="formulario">
                    <div class="dados-pessoais">
                        <h4 class="mb-5 mt-4">Dados Pessoais</h4>
                        <FormKit
                            type="form"
                            :actions="false"
                            v-model="formColab"
                        >
                            <div class="row g-2">
                                <div class=" col-6 mb-3">
                                    <FormKit
                                        type="text"
                                        name="nome"
                                        label="Nome Completo"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation="required"
                                    />
                                </div>
                                <div class=" col-4 mb-3">
                                    <FormKit
                                        type="select"
                                        name="genero"
                                        label="Gênero"
                                        placeholder="Selecione"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation= "required"
                                        :options="[
                                        'Masculino',
                                        'Feminino',
                                        ]"
                                    />
                                </div>
                                <div class=" col-2 mb-3">
                                    <FormKit
                                        type="date"
                                        name="dataNasc"
                                        label="Data Nascimento"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        :validation= "[['required'], ['date_before', new Date]]"
                                    />
                                </div>
                                <div class="col-4 mb-3">
                                    <FormKit
                                        type="text"
                                        name="telefone"
                                        label="Telefone"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation= "required"
                                        
                                    />
                                </div>
                                <div class="col-4 mb-3">
                                    <FormKit
                                        type="email"
                                        name="email"
                                        label="Email"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation= "required"
                                        
                                    />
                                </div>
                                <div class="col-4 mb-3">
                                    <FormKit
                                        type="select"
                                        name="cargo"
                                        label="Cargo"
                                        placeholder="Selecione"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation= "required"
                                        :options="[
                                        'Junior',
                                        'Pleno',
                                        'Senior',
                                        ]"
                                        
                                    />
                                </div>
                            </div>
                            <h4 class="mb-4 mt-5">Dados de Endereço</h4>
                            <div class="row g-2">
                                <div class=" col-4 mb-3">
                                    <FormKit
                                        type="text"
                                        name="cep"
                                        label="CEP"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation="required"
                                        @input="getCEP"
                                    />
                                </div>
                                <div class=" col-6 mb-3">
                                    <FormKit
                                        type="text"
                                        name="cidade"
                                        label="Cidade"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation= "required"
                                    />
                                </div>
                                <div class=" col-2 mb-3">
                                    <FormKit
                                        type="text"
                                        name="estado"
                                        label="Estado"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation= "required"
                                    />
                                </div>
                                <div class="col-10 mb-3">
                                    <FormKit
                                        type="text"
                                        name="logradouro"
                                        label="Logradouro"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation= "required"
                                        
                                    />
                                </div>
                                <div class="col-2 mb-3">
                                    <FormKit
                                        type="text"
                                        name="numero"
                                        label="Número"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation= "required"   
                                    />
                                </div>
                                                                <div class="col-4 mb-3">
                                    <FormKit
                                        type="text"
                                        name="complemento"
                                        label="Complemento"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation= "required"
                                    />
                                </div>
                                <div class="col-4 mb-3">
                                    <FormKit
                                        type="text"
                                        name="bairro"
                                        label="Bairro"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation= "required"
                                    />
                                </div>
                                <div class="col-4 mb-3">
                                    <FormKit
                                        type="text"
                                        name="ponto-refer"
                                        label="Ponto de Referência"
                                        label-class= "form-label"
                                        input-class= "form-control"
                                        validation= "required"
                                    />
                                </div>
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
                                    @click="limpar"
                                />
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
    data(){
        return{
            formColab: {}
        }
    },

    components: {
        SideBar,
        NavBar
    },

    methods: {
        limpar() {
            this.formColab = {}
        },
        salvar() {
            this.$store.commit('cadastraColab', {...this.formColab});
            console.log(this.$store.state.colaborador)
            this.$router.push('listaColab')
        },
        getCEP() {
            if(this.formColab.cep != null && this.formColab.cep.length === 8){  
            this.axios.get('https://viacep.com.br/ws/'+  this.formColab.cep  + '/json/').then(
                (response) => {
                    this.formColab.cidade = response.data.localidade
                    this.formColab.estado = response.data.uf
                    this.formColab.logradouro = response.data.logradouro
                    this.formColab.bairro = response.data.bairro
                }
            )
            }

        }
    }
    
}
</script>

<style>

.sidebar {
    width: 15%;
    
}

.content {
    width: 85%;
    margin: 0 auto;
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