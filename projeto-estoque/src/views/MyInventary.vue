<template>
    <div class="main">
        <div class="sidebar">
            <SideBar/>
            
            
        </div>
        <div class="main-content">
            <div class="navbar">
                <NavBar/>
            </div>

        </div>

    </div>
    
</template>

<script>
import SideBar from "../components/SideBar.vue"
import NavBar from "../components/NavBar.vue"
export default {
    components: {
        SideBar,
        NavBar
    }
    
}
</script>

<style>

</style>