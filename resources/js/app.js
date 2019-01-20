require('./bootstrap');
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
    //console.log(to.path == '/login' && !is_logged_in);
    console.log(requiresAuth == is_logged_in)
    if (is_logged_in && to.path == '/login') {
        next('/')
    } else if (requiresAuth == is_logged_in) {
        next()
    }
});
const store = new Vuex.Store(storeData)
const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
