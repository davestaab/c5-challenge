<template>
  <div>
    <challenge-component :challenge="getCurrentChallenge"></challenge-component>
    <div class="overflow">
      <results :challenge="getCurrentChallenge"></results>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ChallengeComponent from '../components/ChallengeComponent';
import Results from '../components/Results';

export default {
  name: 'Challenge',
  computed: {
    ...mapGetters(['getCurrentChallenge', 'isCurrentChallengeAnnounced'])
  },
  components: {
    ChallengeComponent,
    Results
  }
};
</script>

<style scoped>
.overflow {
  min-width: 1000px;
  overflow: auto;
}
</style>
