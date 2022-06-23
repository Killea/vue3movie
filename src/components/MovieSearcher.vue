<template>
  <n-divider
    >Find your favorite movies
    <span class="info-text">
      Powered by Vue3, Composition API, and TypeScript
    </span>
  </n-divider>
  <n-grid cols="2 400:4 600:6">
    <n-grid-item />
    <n-grid-item class="gird-item">
      <label>Title</label>
      <n-input v-model="title" type="text" placeholder="Title" />
    </n-grid-item>
    <n-grid-item class="gird-item">
      <label>Actor</label>
      <n-input v-model="actor" type="text" placeholder="Actor name" />
    </n-grid-item>
    <n-grid-item class="gird-item">
      <label>Year</label>
      <n-input
        type="text"
        :allow-input="onlyAllowNumber"
        placeholder="Input a number"
      />
    </n-grid-item>
    <n-grid-item class="gird-item">
      <label>Genre</label>
      <n-select
        v-model="genre"
        multiple
        :options="genreOptions"
        placeholder="Genre"
      />
    </n-grid-item>
    <n-grid-item />
  </n-grid>

  <n-grid cols="2 400:4 600:6" style="margin-top: 20px">
    <n-grid-item />
    <n-grid-item />
    <n-grid-item class="gird-item">
      <n-button class="search-button" type="error">Search</n-button>
    </n-grid-item>
    <n-grid-item class="gird-item">
      <n-button class="search-button" type="info">I'm feeling lucky</n-button>
    </n-grid-item>
    <n-grid-item>
      <n-tooltip placement="top-start" trigger="hover">
        <template #trigger>
          <n-button quaternary size="tiny" circle>♻️</n-button>
        </template>
        Reset the filters
      </n-tooltip>
    </n-grid-item>
    <n-grid-item />
  </n-grid>
  <div v-if="results.length > 0">
    <MovieCards />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  NButton,
  NSelect,
  NInput,
  NDivider,
  NGrid,
  NGridItem,
  NTooltip,
} from "naive-ui";

import MovieCards from "./MovieCards.vue";

const genre = ref([]);
const title = ref("");
const actor = ref("");
const onlyAllowNumber = (value: string) => !value || /^\d+$/.test(value);
const results = ref([1]);
// const value3 = ref("");
const genreOptions = ref([
  {
    value: "1",
    label: "Option 1",
  },
  {
    value: "2",
    label: "Option 2",
  },
  {
    value: "3",
    label: "Comedy",
  },
]);
</script>

<style scoped>
.search-button {
  width: 100%;
}

.gird-item {
  margin-left: 10px;
  margin-right: 10px;
}

.info-text {
  margin-left: 10px;
  font-size: 12px;
  color: #999;
}
</style>
