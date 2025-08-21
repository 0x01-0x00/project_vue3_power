import type {RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/layouts/DefaultLayout.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/NotFound.vue"),
  }
];

export default routes;