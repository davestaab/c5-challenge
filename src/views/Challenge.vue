<template>
  <div>
    <h2>Challenge</h2>
    <pre
      >{{ getCurrentChallenge }}
</pre
    >
    <h2>Teams</h2>
    <pre>
  {{ getTeamsForChallenge(getCurrentChallenge.id) }}
  </pre
    >
    <h2>People</h2>
    <pre>
  {{ getPeople }}
  </pre
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import flatMap from 'lodash/flatMap';

export default {
  name: 'Challenge',
  computed: {
    ...mapGetters(['getCurrentChallenge', 'getTeamsForChallenge', 'getPersonById']),
    getPeople() {
      return flatMap(this.getTeamsForChallenge(this.getCurrentChallenge.id), 'members').map(this.getPersonById);
    }
  }
};
</script>

<style scoped></style>
