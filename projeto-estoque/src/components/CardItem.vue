<template>
    <div class="card-item row">
        <img :src="imagem" alt="imgProduto">
        <p class="col-12 descricao">{{  descricao }}</p>
        <p class="col-12 marca">{{ marca }}</p>
        <p class="col-12 modelo">{{ modelo }}</p>
        <button type="button" class="btn btn-success">Success</button>
    </div>
</template>

<script>
export default {
    props: {
        imagem: String,
        descricao: String,
        marca: String,
        modelo: String
    }
}
</script>

<style>
.card-item{
    border: 1px solid #d9d2d9 ;
    padding: 10px;
    box-shadow: 3px 3px #d9d2d9;
    border-radius: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-item .descricao {
    font-weight: bold;
    font-size: 14px;
}
.card-item .marca {
    font-size: 18px;
}
.card-item .modelo {
    font-weight: bold;
    font-size: 25px;
}





</style>