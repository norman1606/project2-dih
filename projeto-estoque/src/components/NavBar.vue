<template>
    <div class="d-flex align-items-center g-0 barsNav">
        <h1>{{ pagina }}</h1>

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
    }
    
}
</script>

<style>

.barsNav {
    background-color: #143168;
    height: 80px;
}

.barsNav h1 {
    color: #fff;
    padding-left: 50px;
    font-weight: 300;
    font-size: 28px;
}



</style>