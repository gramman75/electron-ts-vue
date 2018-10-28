import Vue from 'vue';
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
  inserted: function(el){
    el.focus()
  }
})