import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/challenge/:id',
      name: 'challenge',
      redirect: '/challenge/:id/description',
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
    },
    {
      name: 'challenges',
      path: '/challenges',
      component: () => import(/* webpackChunkName: "challengeList" */ './views/ChallengeList')
    }
  ]
});
