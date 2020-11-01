import Vue from "vue";
import VueRouter from "vue-router";
import GameMain from "@/views/GameMain.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/game-start",
    component: () => import(`@/views/GameStart.vue`),
    name: 'GameStart'
  },
  {
    path: "/",
    component: GameMain,
    name: 'MainScreen'
  },
  {
    path: "*",
    component: () => import(`@/views/NotFound.vue`),
    name: 'NotFound'
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
