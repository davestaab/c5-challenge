<template>
  <div>
    <challenge-component :challenge="getCurrentChallenge"></challenge-component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ChallengeComponent from '../components/ChallengeComponent';

export default {
  name: 'Challenge',
  computed: {
    ...mapGetters(['getCurrentChallenge'])
  },
  components: {
    ChallengeComponent
  }
};
</script>

<style scoped></style>
