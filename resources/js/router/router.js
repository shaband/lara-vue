import Router from 'vue-router';
import ExampleComponent from '../components/ExampleComponent.vue'
import login from '../components/auth/login.vue'
const routes = [{
        name: 'home',
        path: '/',
        component: ExampleComponent,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'login',
        path: '/login',
        component: login
    }
];
export const router = new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: routes
})
