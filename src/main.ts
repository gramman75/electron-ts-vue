import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import { Route, NavigationGuard } from 'vue-router'

import 'expose-loader?$!expose-loader?jQuery!jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

router.beforeEach( (to: Route, from : Route, next: any ) => {
  console.log('global beforeEach')
  if (to.path.includes('foo')){
    alert('foo is error')
    next(false)
  } else {
    bus.$emit('click-menu', to.path)
    next()
  }
})

var bus = new Vue()
var menuClick = new Map()

bus.$on('click-menu', function(id: string){
  let menuCnt: number = menuClick.get(id)||0
  menuClick.set(id, ++menuCnt)
  console.log(menuClick)
})


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

Vue.directive('focus', {
  
  inserted: function(el) {
    el.focus()
  },
  componentUpdated: function(el) {
   console.log('focus directive')
  }
})


Vue.filter('capitalize', function(value: any){
  if (!value) return ''
  let v: string = value.toString()
  return v.charAt(0).toUpperCase() + v.slice(1)
})