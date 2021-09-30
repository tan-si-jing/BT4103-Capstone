import { createApp, h } from 'vue'
import App from './App.vue'
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from "./routes";

const app = createApp({
        render: () =>h(App)
    })

app.use(router)
app.mount('#app')