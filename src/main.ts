import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';

import 'expose-loader?$!expose-loader?jQuery!jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

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