import { createApp, h } from 'vue'
import App from './App.vue'
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from "./routes";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleDown, faAngleUp)

const app = createApp({
        render: () =>h(App)
    })

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')