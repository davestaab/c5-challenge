<template>
  <vue-markdown data-testid="description" :source="writeUp"></vue-markdown>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Description',
  computed: {
    ...mapGetters(['getCurrentChallenge'])
  },
  asyncComputed: {
    writeUp: {
      async get() {
        if (!this.getCurrentChallenge) return Promise.resolve('');
        return await fetch(`/challenges/challenge-${this.getCurrentChallenge.id}.md`).then(response => response.text());
      },
      default: ''
    }
  }
};
</script>
