<template>
  <ul>
    <li v-for="item in sortedData" :key="item._id">
      <p v-bind:item="item"><b>Name:</b> {{ item.name }}</p>
      <p v-bind:item="item"><b>Age:</b> {{ item.age }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  props: {
    data: { type: Array, default: () => [] },
    sorting: { type: Function, default: () => 1 },
    filtering: { type: Function, default: () => true },
  },

  computed: {
    filteredData() {
      return this.data.filter(this.filtering(25, 35));
    },
    sortedData() {
      return this.filteredData.slice().sort(this.sorting);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
