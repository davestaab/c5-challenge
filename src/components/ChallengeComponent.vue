<template>
  <div>
    <base-header>Challenge</base-header>
    <base-subheader data-testid="title">Upcoming Challenge</base-subheader>
    <base-text data-testid="description"> The current challenge will be announced on {{ announcementDate }} </base-text>
    <base-text data-testid="deadline">
      Submission Deadline: <span class="font-bold">{{ deadline }}</span>
    </base-text>
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
    },
    announcementDate() {
      return format(parseISO(this.challenge.announcementDate), 'MMM d, yyyy');
    }
  }
};
</script>
