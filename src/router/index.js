import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import CapstoneEdit from "../views/Capstone.vue";
import StudentsEdit from "../views/StudentsEdit.vue";
import EducationEdit from "../views/EducationEdit.vue";
import SkillsEdit from "../views/SkillsEdit.vue";
import ExperiencesEdit from "../views/ExperiencesEdit.vue";
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
    path: "/capstone/:id/edit",
    name: "capstone-edit",
    component: CapstoneEdit,
  },
  {
    path: "/education/:id/edit",
    name: "education-edit",
    component: EducationEdit,
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
    path: "/skills/:id/edit",
    name: "skills-edit",
    component: SkillsEdit,
  },
  {
    path: "/experiences/:id/edit",
    name: "experiences-edit",
    component: ExperiencesEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
