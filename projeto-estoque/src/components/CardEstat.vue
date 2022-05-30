<template>
    <div class="card-estat row">
        <p class="col-12 numeros">{{ valorEstat }}</p>
        <p class="col-12 titulo">{{ tituloEstat }}</p>
    </div>
</template>

<script>
export default {
    props: {
        valorEstat: Number,
        tituloEstat: String
    }
    
}
</script>

<style>
.card-estat{
    border: 1px solid #d9d2d9 ;
    padding: 10px;
    box-shadow: 3px 3px #d9d2d9;
    border-radius: 10px;
    width: 25%;
    height: 200px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-estat .numeros{
    font-size: 45px;
    font-weight: bold;
    color: #686666;
}
.card-estat .titulo{
    font-size: 20px;
}





</style>