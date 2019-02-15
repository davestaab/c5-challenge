<template>
  <div>
    <ul class="list-reset flex">
      <router-link to="description" tag="li" class="mr-6 p-2 border rounded border-transparent">
        <a class="text-black font-bold hover:text-red-dark">Description</a>
      </router-link>
      <router-link tag="li" to="results" class="mr-6 p-2 border rounded border-transparent">
        <a class="text-black hover:text-red-dark font-bold">Results</a>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Challenge'
};
</script>

<style scoped>
.router-link-active {
  border-color: black;
}
.router-link-active > * {
  /*red-dark*/
  color: #cc1f1a;
}
</style>
