import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Capstone from "../views/Capstone.vue";
import ResumesShow from "../views/resumes/Show.vue";
import StudentsEdit from "../views/StudentsEdit.vue";


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
    path: "/capstone",
    name: "capstone",
    component: Capstone,
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
  {
    path: "/students/:id/edit",
    name: "students-edit",
    component: StudentsEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
