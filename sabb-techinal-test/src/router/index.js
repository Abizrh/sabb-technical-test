import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Sidebar from "../components/Sidebar/Sidebar.vue";
import ParentView from "../views/ParentView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: ParentView,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: "/dashboard",
          name: "Dashboard",
          component: () => import("../views/Dashboard.vue"),
        },
      ]
    },
    
  ],
});

export default router;
