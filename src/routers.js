import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Header from "./components/Header.vue";
import { createRouter,createWebHistory } from "vue-router";

const routes=[
    {
        path: '/',
        redirect:'/home'
    },
    {
        name: 'Home',
        component: Home,
        path: '/home'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
    {
        name: 'Header',
        component: Header,
        path: '/header'
    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router