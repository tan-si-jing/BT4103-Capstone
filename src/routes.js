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
import SpecificResults from './screens/SpecificResults.vue'
import { auth } from './firebase.js'
import Level2Results from './screens/Level2Results.vue'
import Level3Results from './screens/Level3Results.vue'
import Level4Results from './screens/Level4Results.vue'
import Level5Results from './screens/Level5Results.vue'
import ContentPage from './screens/ContentPage.vue'
import DynamicSigns from './screens/Dynamic-Signs.vue'
import DynamicRoadCrossSectionElements from './screens/Dynamic-RoadCrossSectionElements.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "contentpage",
      path: "/contentpage",
      component: ContentPage,
    },
    {
      name: "level2results",
      path: "/level2results",
      component: Level2Results,
      props: true,
    },
    {
      name: "level3results",
      path: "/level3results",
      component: Level3Results,
      props: true,
    },
    {
      name: "level4results",
      path: "/level4results",
      component: Level4Results,
      props: true,
    },
    {
      name: "level5results",
      path: "/level5results",
      component: Level5Results,
      props: true,
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
      name: "specific_results",
      path: "/specific-results",
      component: SpecificResults 
    },
    {
      name: "dynamic_signs",
      path: "/specific-results-signs",
      component: DynamicSigns 
    },
    {
      name: "dynamic_road",
      path: "/specific-results-road",
      component: DynamicRoadCrossSectionElements 
    }
    /*
    { path: '/:pathMatch(.*)',
      component: NotFound 
    },
    */
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
}
});

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
