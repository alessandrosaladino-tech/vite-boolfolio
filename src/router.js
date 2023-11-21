import { createRouter, createWebHashHistory } from "vue-router";

import AboutView from './views/AboutView.vue';
import HomeView from "./views/HomeView.vue";
import ContactsView from './views/ContactsView.vue';
import ProjectsView from './views/ProjectsView.vue';
import SingleProjectView from './views/SingleProjectView.vue';
import NotFoundView from './views/NotFoundView.vue';


const routes = [

    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsView
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsView
    },
    {
        path: '/projects/:slug',
        name: 'project',
        component: SingleProjectView
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView
    },


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