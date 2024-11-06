<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add restaurant</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>

export default ({
    name : "HeaderComponent",
    methods :{
        logout(){
            localStorage.clear();
            this.$router.push({name :'LoginComponent'})
        }
    }
})
</script>

<style scoped>
.nav{

    background-color: #333;
    overflow: hidden;
}
.nav a{
    float: left;
    color: #fff;
    padding: 14px;
    text-align: center;
    text-decoration: none;
    margin-right: 5px;
    font-size: 16px;
}
.nav a:hover{
    background:#ddd;
    color: #333;
}
</style>