<script>
import { mapGetters } from 'vuex';
import TeamScore from './TeamScore';
import StarRibbon from './StarRibbon';
import orderBy from 'lodash/orderBy';

export default {
  name: 'Results',
  props: {
    challenge: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getTeamsForChallenge']),
    teams() {
      return orderBy(this.getTeamsForChallenge(this.challenge.id), ['starCount'], ['desc']);
    }
  },
  components: { TeamScore, StarRibbon }
};
</script>

<template>
  <table class="text-left w-full my-6">
    <thead class="bg-black text-red">
      <tr class="">
        <th class="p-4">Team</th>
        <th class="p-4">Submissions</th>
        <th class="p-4">Scoring</th>
        <th class="p-4">Stars</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(t, i) in teams" :key="t.id" :class="{ 'bg-grey-lighter': i % 2 !== 0 }">
        <td class="p-4">{{ t.name }}</td>
        <td class="p-4">{{ t.submissions.length }}</td>
        <td class="p-4"><team-score :submission-stars="t.submissionStars" /></td>
        <td class="p-4"><star-ribbon :submission-stars="t.submissionStars" /></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
