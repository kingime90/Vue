import Vue from 'vue'
import App from './App'
import router from './router';
import ElementUI from 'element-ui'
import axios from 'axios';
import 'element-ui/lib/theme-default/index.css'
import "babel-polyfill";

import './assets/css/animate.css';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/common.css';

Vue.use(ElementUI);
Vue.prototype.$axios = axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');