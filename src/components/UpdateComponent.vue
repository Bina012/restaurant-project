<template>
<HeaderComponent />
<h1>Hello User, Welcome to the Update restaurant page</h1>
<form class="update">
    <input type="text" name="name" placeholder="Enter name" v-model="restaurant.name">
    <input type="text" name="address" placeholder="Enter address" v-model="restaurant.address">
    <input type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact">
    <button v-on:click="updateRestaurant">Update</button>
</form>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import axios from 'axios';
export default ({
    name: 'HomeComponent',
    components: {
        HeaderComponent
    },
    methods: {
        async updateRestaurant() {
            const result = await axios.put("http://localhost:3000/restaurants/" + this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if (result.status == 200) {
                this.$router.push({
                    name: 'Home'
                })
            }
        }
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: '',
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        const result = await axios.get('http://localhost:3000/restaurants/' + this.$route.params.id);
        this.restaurant = result.data
    }
})
</script>
