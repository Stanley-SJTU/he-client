import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/island",
    name: "island",
    component: () => import("../views/Island.vue"),
  },
  {
    path: "/cars",
    name: "cars",
    component: () => import("../views/Cars.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("../views/Signin.vue")
  },
  {
    path: "/join",
    name: "join",
    component: () => import("../views/Join.vue")
  },
  {
    path: "/race",
    name: "race",
    component: () => import("../views/Race.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});

export default router;
