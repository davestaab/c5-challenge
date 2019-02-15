<script>
import { mapGetters } from 'vuex';
import TeamScore from './TeamScore';
import StarRibbon from './StarRibbon';
import orderBy from 'lodash/orderBy';
import TeamMembers from './TeamMembers';

export default {
  name: 'Results',
  computed: {
    ...mapGetters(['getTeamsForChallenge', 'getCurrentChallenge']),
    teams() {
      return orderBy(this.getTeamsForChallenge(this.getCurrentChallenge.id), ['starCount'], ['desc']);
    }
  },
  components: { TeamMembers, TeamScore, StarRibbon }
};
</script>

<template>
  <div class="overflow-auto">
    <base-header data-testid="resultsTitle">Results: {{ getCurrentChallenge.title }}</base-header>
    <table class="table-responsive text-left w-full my-6" data-testid="resultTable">
      <thead class="border-b border-red text-black">
        <tr>
          <th class="p-4">Team</th>
          <th class="p-4">Members</th>
          <th class="p-4">Scoring</th>
          <th class="p-4">Stars</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(t, i) in teams" :key="t.id" :class="{ 'bg-grey-lighter': i % 2 !== 0 }" data-testid="resultRow">
          <td class="p-4">{{ t.name }}</td>
          <team-members :members="t.people"></team-members>
          <team-score :submission-stars="t.submissionStars" />
          <star-ribbon :submission-stars="t.submissionStars" />
        </tr>
      </tbody>
    </table>
  </div>
</template>
