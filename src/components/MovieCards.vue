<template>
  <n-divider>Results </n-divider>
  <n-grid style="margin-top: 20px" cols="2 600:4 600:6">
    <template v-for="(card, index) in props.cards" v-bind:key="index">
      <n-grid-item class="gird-item">
        <div style="min-height: 300px">
          <img style="width: 100%" :src="`src/assets/${BigInt(card.id)}.jpg`" />

          <div class="text-info">{{ card.release_date.substring(0, 4) }}</div>
          <div class="text-info">{{ card.title }}</div>
          <div class="text-info">
            Actors: {{ card.actors.map((i) => i.name).join(", ") }}
          </div>
          <div class="text-info">
            {{ `${card.is_series ? "Series" : "Non-series"}` }}
          </div>

          <div class="text-info">
            {{ card.genre.map((i) => i.title).join(", ") }}
          </div>
        </div>
      </n-grid-item>
    </template>
  </n-grid>
</template>

<script setup lang="ts">
import { NGrid, NGridItem, NDivider } from "naive-ui";
import { cardDataType } from "./types";
const props = defineProps<{
  cards: Array<cardDataType>;
}>();
</script>

<style scoped>
.gird-item {
  margin-left: 10px;
  margin-right: 10px;
}
.text-info {
  color: #fff;
}
</style>
