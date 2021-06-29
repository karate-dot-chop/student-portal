import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import CapstonesEdit from "../views/CapstonesEdit.vue";
import CapstonesNew from "../views/CapstonesNew.vue";
import StudentsEdit from "../views/StudentsEdit.vue";
import EducationsEdit from "../views/EducationsEdit.vue";
import EducationsNew from "../views/EducationsNew.vue";
import ExperiencesEdit from "../views/ExperiencesEdit.vue";
import ExperiencesNew from "../views/ExperiencesNew.vue";
import Profile from "../views/Profile.vue";

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
    path: "/capstones/:id/edit",
    name: "capstones-edit",
    component: CapstonesEdit,
  },
  {
    path: "/educations/:id/edit",
    name: "educations-edit",
    component: EducationsEdit,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/students/:id/edit",
    name: "students-edit",
    component: StudentsEdit,
  },
  {
    path: "/experiences/:id/edit",
    name: "experiences-edit",
    component: ExperiencesEdit,
  },
  {
    path: "/capstones/new",
    name: "capstones-new",
    component: CapstonesNew,
  },
  {
    path: "/experiences/new",
    name: "experiences-new",
    component: ExperiencesNew,
  },
  {
    path: "/educations/new",
    name: "educations-new",
    component: EducationsNew,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
