import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/MainComponent.vue";
import BoardList from "../views/BoardList.vue";
import BoardDetail from "../views/BoardDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/boardList",
    name: "boardList",
    component: BoardList,
  },
  {
    path: "/boardDetail",
    name: "boardDetail",
    component: BoardDetail,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
