<script>
export default {
  name: 'TeamMembers',
  props: {
    members: {
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
    <base-text v-for="m in members" :key="m.id">{{ m.name }}</base-text>
  </td>
</template>
