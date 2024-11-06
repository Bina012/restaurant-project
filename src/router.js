import HomeComponent from "./components/HomeComponent.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
import AddComponent from "./components/AddComponent.vue";
import UpdateComponent from "./components/UpdateComponent.vue";
const routes = [
    {
        name : 'Home',
        component : HomeComponent,
        path : "/"
    },
    {
        name : 'SignUp',
        component : SignUp,
        path : "/sign-up"
    },
    {
        name : 'LoginComponent',
        component : LoginComponent,
        path : "/login"
    },
    {
        name : 'UpdateComponent',
        component : UpdateComponent,
        path : "/update/:id"
    },
    {
        name : 'AddComponent',
        component : AddComponent,
        path : "/add"
    }
];

const router = createRouter({
    history : createWebHashHistory(),
    routes,
})

export default router;