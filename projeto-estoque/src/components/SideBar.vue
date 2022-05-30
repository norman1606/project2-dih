<template>
        <div class="main-content vh-100">
            <div class="bars">
                <div class=" d-flex justify-content-center logo">
                    <img src="../assets/images/InventLogo.png" alt="logo">
                </div>
                <div class="mt-5 opcoes">
                    <div class=" d-grid gap-3 mt-3">
                        <h5 class="text-white">Geral</h5>
                        <button type="button" class="btn btn-outline-light" @click="toTelaInvent">Inventário</button>
                        <button type="button" class="btn btn-outline-light" @click="toTelaLogin"><img src="../assets/images/Vector.png" alt="logo">    Sair</button>
                    </div>
                    <div class=" d-grid gap-3 mt-3">
                        <h5 class="text-white">Colaboradores</h5>
                        <button type="button" class="btn btn-outline-light" @click="toTelaCadastColab">Cadastrar</button>
                        <button type="button" class="btn btn-outline-light" @click="toTelaListaColab">Listar</button>
                    </div>
                    <div class=" d-grid gap-3 mt-3">
                        <h5 class="text-white">Produtos</h5>
                        <button type="button" class="btn btn-outline-light" @click="toTelaCadastitem">Cadastrar</button>
                        <button type="button" class="btn btn-outline-light" @click="toTelaEmprestimo">Empréstimo</button>
                    </div>
                </div>
            </div>

        </div>    
</template>

<script>
export default {
    methods: {
        toTelaInvent(){
            this.$router.push('inventario')
        },
        toTelaCadastColab() {
            this.$router.push('cadastroColab')
        },
        toTelaCadastitem() {
           this.$router.push('cadastroItem') 
        },
        toTelaEmprestimo() {
            this.$router.push('emprestimo') 
        },
        toTelaLogin() {
            this.$router.push('/')
        },
        toTelaListaColab() {
            this.$router.push('listaColab')
        }

    }
    
}
</script>

<style>

.opcoes {
    margin: 0 auto;
    width: 90%;
}

.bars {
    background-color: #143168;
    height: 100%;
}


.bars-right h1 {
    color: #fff;
}





</style>