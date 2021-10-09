import Vue from "vue";
import VueRouter from 'vue-router';
import HelloWorld from "@/components/HelloWorld";
import elTest from "@/components/sonComponents/elTest";

Vue.use(VueRouter)
const routes = [
    {
        path:'/my',
        name:'my',
        component:elTest
    },
    {
        path: "/hello",
        name:'hello',
        component: HelloWorld
    }
]
export default new VueRouter({
    routes
})