<template>
    <div class="d-flex align-items-center g-0 barsNav">
        <h1>{{ pagina }}</h1>
        <div class="d-flex gravatar">
            <p>{{ user.nome }}</p>
            <vue-gravatar :email="user.email" :size="15" />
        </div>
    </div>
    
</template>

<script>
export default {
    props: {
        pagina: String
    },

    data() {
        return {
            
        }
    },

    computed:{
                user() {
                    if(this.$store.state.pessoa.usuarioLogado == null)
                    return {nome:''}
                    else return this.$store.state.pessoa.usuarioLogado
                }
            }
    
}
</script>

<style>

.barsNav {
    background-color: #143168;
    height: 80px;
    justify-content: space-between;
}

.barsNav h1 {
    color: #fff;
    padding-left: 50px;
    font-weight: 300;
    font-size: 28px;
}

.barsNav p {
    color: #fff;
    padding-right: 50px;
}

.gravatar {
    padding-right: 20px;
}



</style>