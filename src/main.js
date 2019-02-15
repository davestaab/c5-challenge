import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/main.css';
import './components/_globals';
import AsyncComputed from 'vue-async-computed';

Vue.config.productionTip = false;
Vue.use(AsyncComputed);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
