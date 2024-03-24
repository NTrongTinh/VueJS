import { createWebHistory, createRouter } from "vue-router";
// import Home from "../views/HomePage.vue";
// import About from "../views/AboutPage.vue";
// import Product from "../views/ProductPage.vue";
// import Cart from "../views/CartPage.vue";
// import home from "../views/home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "about" */ '../views/HomePage.vue'),
    },
    {
        path: "/cart",
        name: "Cart",
        component: () => import(/* webpackChunkName: "about" */ '../views/CartPage.vue'),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    },
    {
        path: "/about",
        name: "About",
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue'),
    },
    {
        path: "/product/:name",   //<-- notice the colon
        name: "Product",
        component: () => import(/* webpackChunkName: "about" */ '../views/ProductPage.vue'),
    },
    {
        path: "/registration",   //<-- notice the colon
        name: "Sign up",
        component: () => import(/* webpackChunkName: "about" */ '../views/Registration.vue'),
    },
    {
        path: "/changepass",   //<-- notice the colon
        name: "ChangPass",
        component: () => import(/* webpackChunkName: "about" */ '../views/ChangePass.vue'),
    },
    {
        path: "/productdetails/:name",    //<-- notice the colon
        name: "ProductDetails",
        component: () => import(/* webpackChunkName: "about" */ '../views/ProductDetails.vue'),
    },
    {
        path: "/category/:id",    //<-- notice the colon
        name: "CategoryPage",
        component: () => import(/* webpackChunkName: "about" */ '../views/CategoryPage.vue'),
    },
];

const router = createRouter({ 
    history: createWebHistory(),
    routes,
});

export default router;