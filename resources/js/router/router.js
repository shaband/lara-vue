import Router from 'vue-router';
import ExampleComponent from '../components/ExampleComponent.vue'
import login from '../components/auth/login.vue'
import customerIndex from '../components/costumers/index.vue'
import customerTable from '../components/costumers/table.vue'
import customerCreate from '../components/costumers/create.vue'
import customershow from '../components/costumers/show.vue'
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
        path: '/customer',
        component: customerIndex,

        meta: {
            requiresAuth: true
        },
        children: [{
                path: '/',
                component: customerTable,
                name: 'customer.index',

            },
            {
                path: 'create',
                name: 'customer.create',
                component: customerCreate
            },
            {
                path: ':id',
                name: 'customer.show',
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
