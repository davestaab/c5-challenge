<script>
export default {
  name: 'TeamScore',
  props: {
    submissionStars: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<template>
  <div>
    <base-text v-for="(s, i) in submissionStars" :key="i">{{ s.title }}</base-text>
  </div>
</template>
