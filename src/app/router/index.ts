import { createRouter, createWebHistory } from 'vue-router'
import { Home } from "@/pages/home/index.ts";
import { About } from "@/pages/about/index.ts";
import { Basket } from "@/pages/basket/index.ts";
import { pageNotFound } from "@/pages/pageNotFound/index.ts";

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
    },
    {
      path: "/:pathMatch(.*)*",
      component: pageNotFound,
    }
  ],
})

export default router
