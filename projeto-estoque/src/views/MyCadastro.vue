<template>
    <div class="container-fluid g-0">
        <div class="row g-0 vh-100 vw-100">  
            <div class="col-5 d-flex justify-content-center align-items-center left-cadastro">
                <div class="col-8">
                    <h2 class="mb-5 title-cadastro">Faça seu Cadastro</h2>

                    <FormKit
                            type="form"
                            :actions="false"
                            v-model="formData"
                        >
                        <div class="mb-3">
                            <FormKit
                                type="text"
                                name="user"
                                label="Usuário"
                                label-class= "form-label"
                                input-class= "form-control"
                                placeholder="andre.silva"
                                validation="required"
                                v-model="formData.user"
                            />
                        </div>
                        <div class="mb-3">
                            <FormKit
                                type="email"
                                name="email"
                                label="Email"
                                label-class= "form-label"
                                input-class= "form-control"
                                placeholder="andresilva@email.com"
                                validation="required"
                                v-model="formData.email"
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
                                v-model="formData.password"
                            />
                        </div>
                        <div class="mb-3">
                            <FormKit
                                type="password"
                                name="confirm-password"
                                label="Confirme sua senha"
                                label-class= "form-label"
                                input-class= "form-control"
                                placeholder="Confirme sua senha"
                                validation="required|length:6"
                            />
                        </div>
                        <div class=" d-grid gap-2 d-flex justify-content-center ">
                            <FormKit
                                type="button"
                                name="button"
                                label="Cadastrar"
                                input-class="btn btn-primary botao-logar"
                                @click="cadastrar"
                            />
                            <FormKit
                                type="button"
                                name="button"
                                label="Voltar"
                                input-class="btn btn-outline-dark botao-google"
                                @click="voltaLogin"
                            />
                        </div>
                        </FormKit>
                </div>
            </div>
            <div class="col-7 d-flex justify-content-center align-items-center ">
                <img src="../assets/images/cadastro.png" alt="img-cadastro">
            </div>
        </div>       
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                
            }
        }
    },

    methods: {
        voltaLogin() {
            this.$router.push('/')
        },

        cadastrar() {
            this.$store.commit('cadastrar', {...this.formData});
            console.log(this.$store.state);

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

.left-cadastro {
    background-color: #e8edf5;
}

.botao-cadastrar, .botao-voltar {
    padding: 5px 70px 5px 70px;
}

.title-cadastro {
    font-weight: bold;
}



</style>