require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './components/App.vue';
import Category from './components/Category.vue';
import StoreCategory from './components/StoreCategory.vue';
import UpdateCategory from './components/UpdateCategory.vue';

const routers = [
    { path: '/store-category', name: 'StoreCategory', component: StoreCategory},
    { path: '/update-category/:id', name: 'UpdateCategory', component: UpdateCategory},
    { path: '/', name: 'Category', component: Category}
];

const router= new VueRouter({mode: 'history', routes: routers});

new Vue(Vue.util.extend({router}, App)).$mount('#app');
