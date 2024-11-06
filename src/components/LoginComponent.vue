<template>
<img src="../assets/restro1.jpg" alt="restaurant image" class="logo" />
<h1>Login</h1>
<div class="login">
    <input type="text" placeholder="Enter email" v-model="email">
    <input type="password" placeholder="Enter password" v-model="password">
    <button v-on:click="loginForm">Login</button>
    <p>
        <router-link to="/sign-up">Sign Up</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios';
export default ({
    name: "LoginComponent",
    data(){
        return{
            email: "",
            password: "",
        }
    },
    methods:{
        async loginForm()
        {
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            )
            if(result.data.length > 0 && result.status == 200){
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name: 'Home'})

            }
        }
    },
    mounted()
    {
        let user = localStorage.getItem("user-info");
        if(user){
            this.$router.push({name:'Home'})
        }
    }
})
</script>

<style scoped>
.logo {
    width: 100px;
}
</style>
