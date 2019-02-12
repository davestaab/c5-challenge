import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/challenge/current',
      name: 'challenge',
      redirect: '/challenge/current/description',
      component: () => import(/* webpackChunkName: "challenge" */ './views/Challenge.vue'),

      children: [
        {
          path: 'results',
          name: 'results',
          component: () => import(/* webpackChunkName: "results" */ './components/Results.vue')
        },
        {
          path: 'description',
          name: 'description',
          component: () => import(/* webpackChunkName: "description" */ './components/Description.vue')
        }
      ]
    }
  ]
});
