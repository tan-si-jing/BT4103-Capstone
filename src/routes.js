import { createRouter,createWebHistory } from 'vue-router'
import Home from "./screens/Home.vue";
import Login from "./screens/AdminLogin.vue"
import Dashboard from "./screens/Dashboard.vue"
import Search from "./screens/Search.vue"
import Search2 from "./screens/Search2.vue"
import Search3 from "./screens/Search3.vue"
import Search4 from "./screens/Search4.vue"
import Search5 from "./screens/Search5.vue"
import SearchSpecific from "./screens/SearchSpecific.vue"
import Results from "./screens/Results.vue"
import SpecificResults from './screens/SpecificResults.vue'
import { auth } from './firebase.js'
import Level2Results from './screens/Level2Results.vue'
import Level3Results from './screens/Level3Results.vue'
import Level4Results from './screens/Level4Results.vue'
import Level5Results from './screens/Level5Results.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/level2results",
      component: Level2Results,
    },
    {
      path: "/level3results",
      component: Level3Results,
    },
    {
      path: "/level4results",
      component: Level4Results,
    },
    {
      path: "/level5results",
      component: Level5Results,
    },
    {
      name:"home",
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
      name: 'search',
      path: "/search",
      component: Search,
      props: true,
    },
    {
      name: 'searchspecific',
      path: "/searchspecific",
      component: SearchSpecific,
      props: true,
    },
    {
      name: 'search2',
      path: "/search2",
      component: Search2,
      props: true,
    },
    {
      name:'search3',
      path: "/search3",
      component: Search3,
      props: true,
    },
    {
      name:'search4',
      path: "/search4",
      component: Search4,
      props: true,
    },
    {
      name:'search5',
      path: "/search5",
      component: Search5,
      props: true,
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
