require('./bootstrap');
import vuetify from "./vuetify";
import Alpine from 'alpinejs';
import routes from './router/routes.js'
import VueRouter from 'vue-router'
window.Alpine = Alpine;
window.Vue = require('vue').default;


Vue.component('app-component', require('./components/AppComponent.vue').default);

Vue.use(VueRouter)
const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: routes, 
});

const app = new Vue({
    el: '#app',
    vuetify,
    router,
});


Alpine.start();