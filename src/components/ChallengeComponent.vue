<template>
  <div>
    <div class="">Challenge</div>
    <div data-testid="title">{{ challenge.title }}</div>
    <div data-testid="description">{{ challenge.description }}</div>
    <div data-testid="deadline">Deadline: {{ deadline }}</div>
  </div>
</template>

<script>
import { parseISO, format } from 'date-fns';
export default {
  name: 'ChallengeComponent',
  props: {
    challenge: {
      type: Object,
      required: true
    }
  },
  computed: {
    deadline() {
      return format(parseISO(this.challenge.eventDate), 'MMM d, yyyy');
    }
  }
};
</script>
