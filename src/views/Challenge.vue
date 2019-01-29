<template>
  <div>
    <challenge-component :challenge="getCurrentChallenge"></challenge-component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import flatMap from 'lodash/flatMap';
import ChallengeComponent from '../components/ChallengeComponent';

export default {
  name: 'Challenge',
  computed: {
    ...mapGetters(['getCurrentChallenge', 'getTeamsForChallenge', 'getPersonById']),
    getPeople() {
      return flatMap(this.getTeamsForChallenge(this.getCurrentChallenge.id), 'members').map(this.getPersonById);
    }
  },
  components: {
    ChallengeComponent
  }
};
</script>

<style scoped></style>
