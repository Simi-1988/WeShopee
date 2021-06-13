import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Comments from "../views/Comments.vue";
import ProductDetail from "../views/ProductDetail";
import UserProfile from "../views/UserProfile";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/shoppingCart",
        name: "ShoppingCart",
        component: ShoppingCart
    } ,
    {
        path: "/register",
        name: "Register",
        component: Register
    } ,
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {

        path: "/comments",
        name: "Comments",
        component: Comments
    },
    {
        path: "/ProductDetail/:id",
        name: "ProductDetail",
        component: ProductDetail

    } ,
    {
        path: "/UserProfile",
        name: "UserProfile",
        component: UserProfile

    }     
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;