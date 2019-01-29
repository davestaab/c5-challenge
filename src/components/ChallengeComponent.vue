<template>
  <div>
    <div class="text-5xl leading-loose">Challenge</div>
    <div data-testid="title" class="text-2xl leading-normal">Upcoming Challenge</div>
    <p data-testid="description" class="text-base leading-normal">
      The current challenge will be announced on {{ announcementDate }}
    </p>
    <div data-testid="deadline" class="text-base leading-normal">
      Submission Deadline: <span class="font-bold">{{ deadline }}</span>
    </div>
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
