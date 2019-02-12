<template>
  <vue-markdown data-testid="description" :source="writeUp"></vue-markdown>
</template>

<script>
import { parseISO, format } from 'date-fns';
import { mapGetters } from 'vuex';

export default {
  name: 'Description',
  data() {
    return {
      writeUp: ''
    };
  },
  computed: {
    ...mapGetters(['getCurrentChallenge']),
    deadline() {
      return this.challenge ? format(parseISO(this.challenge.eventDate), 'MMM d, yyyy') : '';
    },
    announcementDate() {
      return this.challenge ? format(parseISO(this.challenge.announcementDate), 'MMM d, yyyy') : '';
    }
  },
  watch: {
    getCurrentChallenge: {
      immediate: true,
      handler: function(newVal) {
        if (newVal.id) {
          this.getChallengeWriteup(newVal.id);
        }
      }
    }
  },
  methods: {
    getChallengeWriteup(id) {
      fetch(`/challenges/challenge-${id}.md`)
        .then(response => response.text())
        .then(writeUp => {
          this.writeUp = writeUp;
        });
    }
  }
};
</script>
