import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../components/HelloWorld.vue"),
    },
    ,
    {
      path: "/about",
      component: () => import("../components/About.vue"),
    },
  ],
});
