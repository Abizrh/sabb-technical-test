import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
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
        {
          path: '/detail/:userId',
          name: 'detail',
          component: () => import('../views/DetailView.vue')
        },
        {
          path: '/create',
          name: 'create',
          component: () => import('../views/Create.vue')
        },
        {
          path: '/update/:userId',
          name: 'update',
          component: () => import('../views/Create.vue')
        },
        
      ]
    },
    
  ],
});

export default router;
