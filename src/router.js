import { createRouter, createWebHashHistory } from "vue-router";

import AboutView from './components/AboutView.vue';

const routes = [

    { path: '/AppAbout', component: AboutView },
   

];

// router E' UNA ISTANZA di createRouter() CHE USA LE ROTTE DICHIARATE NELLA const routes
const router = createRouter(
    {
        // HYSTORY E' UN'ISTANZA DI createWebHashHistory()
        history: createWebHashHistory(),
        routes
    }
)

// EXPORT DI router.js
export { router }