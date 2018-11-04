import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/onOff',
      name: 'onOff',
      component: () => import('./views/OnOff.vue')
    },
    {
      path: '/raddit',
      name: 'raddit',
      component: () => import('./views/Raddit.vue')
    },
    {
      path: '/start',
      name: 'start',
      component: () => import('./views/StartView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/List.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('./views/Event.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('./views/Form.vue')
    },
    {
      path: '/comp',
      name: 'comp',
      component: () => import('./views/Comp.vue')
    },
    {
      path: '/transition',
      name: 'transition',
      component: () => import('./views/Transition.vue')
    },
    {
      path: '/mixin',
      name: 'mixin',
      component: () => import('./views/Mixin.vue')
    },
    {
      path: '/customDirective',
      name: 'customDirective',
      component: () => import('./views/CustomDirective.vue')
    },
    {
      path: '/render',
      name: 'render',
      component: () => import('./views/Render.vue')
    },
    {
      path: '/filter',
      name: 'filter',
      component: () => import('./views/Filter.vue')
    },
    {
      path: '/asyncUpdate',
      name: 'asyncUpdate',
      component: () => import('./views/AsyncUpdate.vue')
    },
    {
      path: '/dynamicRoute/:id',
      name: 'dynamicRoute',
      component: () => import('./views/DynamicRoute.vue'),
      beforeEnter: (to, from , next) => {
        console.log('each route before enter')
        debugger;
      }
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('./views/VuexView.vue')
    },
  ],
})
