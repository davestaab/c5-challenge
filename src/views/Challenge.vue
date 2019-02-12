<template>
  <div>
    <router-link to="description">Description</router-link>&nbsp;
    <router-link to="results">Results</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Challenge'
};
</script>
