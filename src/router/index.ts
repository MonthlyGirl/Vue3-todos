import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Vue3 todos",
	component: () =>
	  import(/* webpackChunkName: "about" */ "../views/Todo.vue"),
    
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
