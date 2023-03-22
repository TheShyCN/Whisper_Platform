import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../pages/Login.vue";
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("../layout/Layout.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../pages/Home.vue"),
      },
      {
        path: "/customer-service",
        name: "customer-service",
        component: () => import("../pages/CustomerService.vue"),
      },
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
