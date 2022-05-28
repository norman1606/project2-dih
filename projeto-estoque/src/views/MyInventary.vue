<template>
    <div class="main d-flex">
        <div class="sidebar">
            <SideBar/>   
        </div>
        <div class="content">
            <div class="nav-bar">
                <NavBar pagina = "INVENTÁRIO"/>
            </div>
            <div>
                <h1>acorda pedrinho</h1>
                <ul>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                </ul>  
            </div>
        </div>
        
        

    </div>
    
</template>

<script>
import NavBar from "../components/NavBar.vue"
import SideBar from "../components/SideBar.vue"
export default {
    components: {
        SideBar,
        NavBar
    }
    
}
</script>

<style>

.sidebar {
    width: 15%;
    
}

.content {
    width: 85%;
}


</style>