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
  <div>
    <span v-for="(s, i) in starsArray" :key="i">{{ s }}</span>
  </div>
</template>
