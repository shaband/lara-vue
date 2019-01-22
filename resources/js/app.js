require('./bootstrap');
const Axios = require('axios')
import Vue from 'vue';
import Vuex from 'vuex'
import boostrap from 'bootstrap';
import vueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'

import {
    storeData
} from './store/store';
import {
    router
} from './router/router'

Vue.use(vueRouter)
Vue.use(Vuex)


router.beforeEach((to, from, next) => {

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const is_logged_in = store.state.isLoggedIn;
    if (is_logged_in == true && to.path == '/login') {
        next('/')
    } else if (requiresAuth && is_logged_in == false) {
        next("/login")
    } else {
        next()
    }
});



const store = new Vuex.Store(storeData);

Axios.interceptors.response.use(null, err => {
    if (err.response.status == 401) {
        store.commit('logout');
        router.push('/login');

    }
})
const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
