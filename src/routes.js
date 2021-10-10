import { createRouter, createWebHistory } from 'vue-router'
import Home from "./screens/Home.vue";
import Dashboard from "./screens/Dashboard.vue"
import Search from "./screens/Search.vue"
import Search2 from "./screens/Search2.vue"
import Search3 from "./screens/Search3.vue"
import Search4 from "./screens/Search4.vue"
import Search5 from "./screens/Search5.vue"
import SearchSpecific from "./screens/SearchSpecific.vue"
import SpecificResults from './screens/SpecificResults.vue'
import DynamicSigns from './screens/Dynamic-Signs.vue'
import DynamicRoadCrossSectionElements from './screens/Dynamic-RoadCrossSectionElements.vue'
import Results from './screens/Results.vue'
import Results2 from './screens/Results2.vue'
import Results3 from './screens/Results3.vue'
import Results4 from './screens/Results4.vue'
import Results5 from './screens/Results5.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "results",
      path: '/results',
      component: Results,
      children: [
        { path: 'page1', component: Results2 },
        { path: 'page2', component: Results3 },
        { path: 'page3', component: Results4 },
        { path: 'page4', component: Results5 }
      ]
    },
    {
      name:"home",
      path: "/",
      component: Home,
    },
    {
      path: "/dashboard",
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
  // eslint-disable-next-line no-unused-vars
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {el: to.hash, top:10, behavior: 'smooth',}
    }
    return { top: 0 }
  },
});
export default router;
