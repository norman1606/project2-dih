<template>
    <div class="container-fluid g-0">
        <div class="row vh-100 vw-100">
            <div class="col-7 d-flex justify-content-center align-items-center right-login">
                <img src="../assets/images/login.png" alt="img-login">
            </div>
            <div class="col-5 d-flex justify-content-center align-items-center">

                <div class="col-8">
                    <div class="d-flex justify-content-between criar-conta">
                        <p>Nãp possui uma conta?</p>
                        <button type="button" class="btn btn-outline-dark botao-google" @click="cadastrar">
                            Criar Conta
                        </button>
                    </div>
                    <div class="formulario-login">
                        <h2 class="mb-5 title-login">Login</h2>

                        <FormKit
                            type="form"
                            :actions="false"
                            v-model="formData"
                        >
                        <div class="mb-3">
                            <FormKit
                                type="email"
                                name="email"
                                label="Email"
                                label-class= "form-label"
                                input-class= "form-control"
                                placeholder="andresilva@email.com"
                                validation="required"
                            />
                        </div>
                        <div class="mb-3">
                            <FormKit
                                type="password"
                                name="password"
                                label="Senha"
                                label-class= "form-label"
                                input-class= "form-control"
                                placeholder="Digite sua senha"
                                validation="required|length:6"
                            />
                        </div>
                        <div class=" d-grid gap-2 d-flex justify-content-center ">
                            <FormKit
                                type="button"
                                name="button"
                                label="Entrar"
                                input-class="btn btn-primary botao-logar"
                                @click="logar"
                            />
                            <FormKit
                                type="button"
                                name="button"
                                label="Google"
                                input-class="btn btn-outline-dark botao-google"
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

export default {
    data() {
        return {
           formData: {}
        }
    },

    methods: {
        cadastrar() {
            this.$router.push('/cadastro')
        },

        logar() {
            this.$store.commit('logar',{...this.formData})
            if(this.$store.state.pessoa.usuarioLogado == undefined){
                alert('Usuario nao encontrado')
            }
            else{
                this.$router.push('/inventario')
            }

        }

    }
}
</script>

<style>
html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    height: 100%;
}

.row {
    margin-left: 0;
}

.right-login {
    background-color: #e8edf5;
}

.botao-logar, .botao-google {
    padding: 5px 70px 5px 70px;
}

.title-login {
    font-weight: bold;
}

.criar-conta {
    margin-bottom: 90px;
}



</style>