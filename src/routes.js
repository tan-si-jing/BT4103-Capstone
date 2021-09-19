import { createRouter,createWebHistory } from 'vue-router'
import Home from "./screens/Home.vue";
import Login from "./screens/AdminLogin.vue"
import Dashboard from "./screens/Dashboard.vue"
import Search from "./screens/Search.vue"
import Results from "./screens/Results.vue"
import SpecificResults from './screens/SpecificResults.vue'
import { auth } from './firebase.js'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/dashboard",
      meta:{ authRequired: true },
      component: Dashboard,
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
    {
      path: "/specific-results",
      component: SpecificResults 
    }
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

/* to disable viewing of dashboard if admin is not logged in*/
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    auth.onAuthStateChanged(function (user) {
      if (!user) {
        next({
          path: '/login',
        });
      } else {
        next();
      }
    })
  } else {
    next();
  }
});

export default router;
