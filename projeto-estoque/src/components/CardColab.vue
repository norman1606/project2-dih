<template>
    <div class="card-colab row">
        <vue-gravatar :email="email" :size="150" />
        <p class="col-12 nome">{{ nome }}</p>
        <p class="col-12 email">{{ email }}</p>
        <p class="col-12 telefone">{{ telefone }}</p>
        <p class="col-12 cargo">{{ cargo }}</p>
    </div>
</template>

<script>
export default {
    props: {
        imagem: String,
        nome: String,
        email: String,
        telefone: String,
        cargo: String
    }
}
</script>

<style>
.card-colab{
    border: 1px solid #d9d2d9 ;
    padding: 10px;
    box-shadow: 3px 3px #d9d2d9;
    border-radius: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-colab .nome {
    font-weight: bold;
    font-size: 25px;
}
.card-colab .telefone, .card-colab .email {
    font-size: 15px;
}
.card-colab .cargo {
    font-weight: bold;
    font-size: 20px;
    color: #143168;
}





</style>