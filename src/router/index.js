import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import Dashboard from "../views/Dashboard.vue";
import GradePredictor from "../views/GradePredictor.vue";
import Expression from "../views/Expression.vue";
import HRCTable from "../views/HRCTable.vue";
import JS_Stresslevel from "../views/JS_Stresslevel.vue";
import GradeAPI from "../views/GradeAPI.vue";
import HRCInput from "../views/HRCInput.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        components: { default: Dashboard },
      },
      {
        path: "/GradePredictor",
        name: "Grade Predictor",
        components: { default: GradePredictor },
      },
      {
        path: "/Expression",
        name: "Facial Expression",
        components: { default: Expression },
      },
      {
        path: "/HRCTable",
        name: "HRC Table",
        components: { default: HRCTable },
      },
      {
        path: "/JS_Stresslevel",
        name: "Student Stress Level",
        components: { default: JS_Stresslevel },
      },
      {
        path: "/GradeAPI",
        name: "GP API",
        components: { default: GradeAPI },
      },
      {
        path: "/HRCInput",
        name: "HRC Input",
        components: { default: HRCInput },
      },
    ],
  },
  {
    path: "/",
    redirect: "login",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        components: { default: Login },
      },
      {
        path: "/register",
        name: "register",
        components: { default: Register },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
