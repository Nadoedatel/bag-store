import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/home.vue";
import About from "@/views/about.vue";
import Basket from "@/views/basket.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/basket",
      component: Basket,
    }
  ],
})

export default router
