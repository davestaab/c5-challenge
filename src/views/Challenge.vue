<template>
  <div>
    <challenge-one-component :challenge="getCurrentChallenge"></challenge-one-component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ChallengeOneComponent from '../components/ChallengeOneComponent';

export default {
  name: 'Challenge',
  computed: {
    ...mapGetters(['getCurrentChallenge', 'isCurrentChallengeAnnounced'])
  },
  components: {
    ChallengeOneComponent
  }
};
</script>

<style scoped></style>
