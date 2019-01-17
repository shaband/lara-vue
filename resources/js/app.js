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
const store = new Vuex.Store(storeData)
const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
