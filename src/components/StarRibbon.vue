<script>
export default {
  name: 'StarRibbon',
  props: {
    submissionStars: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    stars() {
      return this.submissionStars.reduce((sum, s) => sum + s.stars, 0);
    },
    starsArray() {
      return Array(this.stars).fill('⭐');
    }
  }
};
</script>

<template>
  <td class="p-4">
    <span v-for="(s, i) in starsArray" :key="i">{{ s }}</span>
  </td>
</template>
