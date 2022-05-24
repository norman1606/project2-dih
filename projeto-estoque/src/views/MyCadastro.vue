<template>
    <div class="container-fluid">
        <div class="row g-0 vh-100 vw-100">  
            <div class="col-5 d-flex justify-content-center align-items-center left-cadastro">
                <div class="col-8">
                    <h2 class="mb-5 title-cadastro">Faça seu Cadastro</h2>

                    <form>
                        <div class="mb-3">
                            <label for="user" class="form-label">Usuário</label>
                            <input type="text" class="form-control" id="user" aria-describedby="emailHelp" autocomplete="off"
                            placeholder="andre.silva" v-model="form.user">
                        </div>
                        <div class="mb-3">
                            <label for="Email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" autocomplete="off"
                            placeholder="andresilva@email.com" v-model="form.email">
                        </div>
                        <div class="mb-3">
                            <label for="Password" class="form-label d-flex justify-content-between">
                                Senha
                            </label>
                            <input type="password" class="form-control" id="password" placeholder="Digite sua senha" v-model="form.password">
                        </div>
                        <div class="mb-3">
                            <label for="Password" class="form-label d-flex justify-content-between">
                                Confirme sua Senha
                            </label>
                            <input type="password" class="form-control" id="password" placeholder="Confirme sua senha" v-model="form.password">
                        </div>
                        <div class=" d-grid gap-2 d-flex justify-content-center ">
                            <button type="submit" class="btn btn-primary botao-cadastrar">Cadastrar</button>
                            <button type="button" class="btn btn-outline-dark botao-voltar" @click="voltaLogin">Voltar</button>
                        </div>
                    </form>
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
            form: {
                email:"",
                password:""
            }
        }
    },

    methods: {
        voltaLogin() {
            this.$router.push('/')
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