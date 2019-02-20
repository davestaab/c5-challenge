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
  <td class="p-4">
    <base-text v-for="(s, i) in submissionStars" :key="i">{{ s.title }}</base-text>
  </td>
</template>
