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
    },
    {
        name: 'costumer',
        path: '/costumer',
        component: customerIndex,
        meta: {
            requiresAuth: true
        },
        children: [{
                path: '/',
                component: customerTable
            },
            {
                path: '/create',
                component: customerCreate
            },
            {
                path: ':id/show',
                component: customershow
            },

        ]
    }
];
export const router = new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: routes
})
