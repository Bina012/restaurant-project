<template>
    <img src="../assets/restro1.jpg" alt="restaurant image" class="logo"/>
    <h1>Sign up</h1>
    <div class="register">
    <input type="text" placeholder="Enter name" v-model="name">
    <input type="text" placeholder="Enter email" v-model="email">
    <input type="password" placeholder="Enter password" v-model="password">
    <button @click="signUp">Signup</button>
    <p><router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
import axios from "axios";
export default ({
    name : 'SignUp',
    data(){
    return{
      name : "",
      email : "",
      password : "",
    }
  },
  methods : {
    async signUp(){
      let result = await axios.post("http://localhost:3000/user",{
        name : this.name,
        email : this.email,
        password : this.password
      });
      if(result.status == 201){
        localStorage.setItem("user-info",JSON.stringify(result.data))
        this.$router.push({name: 'Home'})
      }
    }
  },
  mounted(){
    let user = localStorage.getItem('user-info');
    if(user){
      this.$router.push({name: 'Home'})
    }
  }
})
</script>
<style scoped>
.logo{
    width : 100px;
}
</style>