import Vue from 'vue';
import Vuex from 'vuex';
import submissionStars from './store/submissionStars';
import teams from './store/teams';
import people from './store/people';
import submissions from './store/submissions';
import challenges from './store/challenges';
import teamChallenges from './store/teamChallenges';
import getters from './store/getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    submissionStars,
    teams,
    people,
    submissions,
    challenges,
    teamChallenges
  },
  getters,
  mutations: {},
  actions: {}
});
