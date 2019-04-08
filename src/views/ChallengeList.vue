<template>
  <div>
    <base-header>Challenges</base-header>
    <table class="table-responsive text-left w-full my-6">
      <thead class="border-b border-red text-black">
        <tr>
          <th width="25%" class="p-4">Title</th>
          <th class="p-4">Event Date</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(c, i) in challenges"
          :key="c.id"
          :class="{ 'bg-grey-lighter': i % 2 !== 0 }"
          data-testid="challengeRow"
        >
          <td class="p-4">
            <router-link to="description" tag="li" class="mr-6 p-2 border rounded border-transparent">
              {{ c.title }}
            </router-link>
          </td>
          <td class="p-4">{{ c.eventDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ChallengeList',
  computed: {
    ...mapState(['challenges'])
  }
};
</script>

<style scoped></style>
