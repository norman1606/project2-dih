<template>
    <div class="container-fluid">
        <div class="row g-0 vh-100 vw-100">
            <div class="col-7 left-login">col-8</div>
            <div class="col-5 d-flex justify-content-center align-items-center">
                <div class="col-8">
                    <h2 class="mb-5 title-login">Login</h2>

                    <form>
                        <div class="mb-3">
                            <label for="Email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" autocomplete="off"
                            placeholder="andresilva@email.com" v-model="form.email">
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="Password" class="form-label d-flex justify-content-between">
                                Senha
                                <a href="#">Esqueceu sua senha?</a>
                            </label>
                            <input type="password" class="form-control" id="password" placeholder="Digite sua senha" v-model="form.password">
                        </div>
                        <div class=" d-grid gap-2 d-flex justify-content-center ">
                        <button type="submit" class="btn btn-primary botao-logar">Entrar</button>
                        <button type="button" class="btn btn-outline-dark botao-google">Google</button>
                        </div>
                    </form>
                </div>
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

.left-login {
    background-color: #f2f2f2;
}

.botao-logar, .botao-google {
    padding: 5px 70px 5px 70px;
}

.title-login {
    font-weight: bold;
}

</style>