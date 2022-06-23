<template>
  <!-- <n-divider>Results</n-divider> -->
  <n-grid cols="2 400:4 600:6">
    <n-grid-item />
    <template v-for="(item, index) in items" v-bind:key="index">
      <n-grid-item class="gird-item">
        <label>Title</label>
      </n-grid-item>
    </template>

    <n-grid-item />
  </n-grid>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NGrid, NGridItem } from "naive-ui";

const items = ref([1, 2, 3, 4]);
// const value3 = ref("");
</script>

<style scoped>
.gird-item {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
