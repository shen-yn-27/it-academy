import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import Index from "./views/index.vue";
import Second from "./views/second.vue";
import Third from "./views/third.vue";
import Foruth from "./views/foruth.vue";
import List from "./views/list.vue";

let routes = [
    {
        path: '/',
        component: Index,
    },
    {
        path: '/second',
        component: Second,
    },
    {
        path: '/third',
        component: Third,
    },
    {
        path: '/foruth',
        component: Foruth,
    },
    {
        path: '/list',
        component: List,
    }
]

let router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

createApp(App).use(router).mount('#app')
