import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ResumesIndex from "../views/resumes/Index.vue";
import ResumesShow from "../views/resumes/Show.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/resumes",
    name: "resumes-index",
    component: ResumesIndex,
  },
  {
    path: "/resumes/:id",
    name: "resumes-show",
    component: ResumesShow,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
