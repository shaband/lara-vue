require('./bootstrap');
import Vue from 'vue';
import Vuex from 'vuex'
import vueRouter from 'vue-router'
import App from './App.vue'

import {
    storeData
} from './store/store';
import {
    router
} from './router/router'
import {
    Authorization
} from './helpers/helper';

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
window.axios.defaults.headers.common['Authorization'] = Authorization()

window.axios.interceptors.response.use(null, err => {
    if (err.response.status == 401) {
        store.commit('logout');
        router.push('/login');
    }
    return Promise.reject(err);
})
const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
