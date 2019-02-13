<template>
  <div>
    <ul class="list-reset flex">
      <router-link to="description" tag="li" class="mr-6 p-2 border rounded border-grey-darker">
        <a class="text-black font-bold hover:text-red">Description</a>
      </router-link>
      <router-link tag="li" to="results" class="mr-6 p-2 border rounded border-grey-darker">
        <a class="text-black hover:text-red font-bold">Results</a>
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
  border-color: red;
}
.router-link-active a {
  /*color: red;*/
}
</style>
