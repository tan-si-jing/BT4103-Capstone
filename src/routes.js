import { createRouter,createWebHistory } from 'vue-router'
import Home from "./screens/Home.vue";
import Login from "./screens/AdminLogin.vue"
import Search from "./screens/Search.vue"
import Results from "./screens/Results.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/search",
      component: Search,
      //props: true,
    },
    {
      path: "/results",
      component: Results
    },
    /*
    { path: '/:pathMatch(.*)',
      component: NotFound 
    },
    {
      path: "/admin",
      meta: { requiresAuth: true },
      //component:...
      children: [
        {
          path: "dashboard",
          component: Dashboard,
        }
      ],
    },*/
  ],
});

/*
// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  const isLoggedIn = true //check if logged in
  
  if (to.meta.requiresAuth && !isLoggedIn) {
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
  } else next()
})*/

export default router;
