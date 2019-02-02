<template>
  <vue-markdown data-testid="" :source="writeUp"></vue-markdown>
</template>

<script>
import { parseISO, format } from 'date-fns';

export default {
  name: 'ChallengeComponent',
  data() {
    return {
      writeUp: ''
    };
  },
  props: {
    challenge: {
      type: Object,
      default: null
    }
  },
  computed: {
    deadline() {
      return this.challenge ? format(parseISO(this.challenge.eventDate), 'MMM d, yyyy') : '';
    },
    announcementDate() {
      return this.challenge ? format(parseISO(this.challenge.announcementDate), 'MMM d, yyyy') : '';
    }
  },
  watch: {
    challenge: {
      immediate: true,
      handler: function(newVal) {
        console.log('updated challenge', newVal);
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
