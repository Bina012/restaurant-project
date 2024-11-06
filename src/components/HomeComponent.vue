<template>
<HeaderComponent />
<h1>Hello {{ name }}, Welcome to the Home page</h1>
<table border="1">
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Address</th>
        <th>Action</th>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td>
            <router-link :to="'/update/'+item.id">Update</router-link>
            <button v-on:click="deleteRestaurant(item.id)">Delete</button>
        </td>
    </tr>
</table>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import axios from 'axios';
export default ({
    name: 'HomeComponent',
    components: {
        HeaderComponent
    },

    data() {
        return {
            name: '',
            restaurant: [],
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        // this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        let result = await axios.get("http://localhost:3000/restaurants");
        console.log(result)
        this.restaurant = result.data;
    },
    methods: {
        async deleteRestaurant(id) {
            let result = await axios.delete("http://localhost:3000/restaurants/" + id);
            if (result.status == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let user = localStorage.getItem("user-info");
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({
                    name: 'SignUp'
                })
            }
            let result = await axios.get("http://localhost:3000/restaurants");
            console.log(result)
            this.restaurant = result.data;
        }
    }
})
</script>

<style scoped>
td {
    width: 160px;
    height: 40px;
}
</style>
