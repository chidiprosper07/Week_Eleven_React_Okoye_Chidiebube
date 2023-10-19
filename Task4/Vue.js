import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/example/:Home',
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  router,
});