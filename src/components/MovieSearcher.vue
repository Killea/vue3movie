<template>
  <n-config-provider :theme="darkTheme">
    <n-divider
      >Find your favorite movies
      <span class="copy-info">
        Powered by Vue3, Composition API, and TypeScript
      </span>
    </n-divider>
    <n-grid cols="2 400:4 600:6">
      <n-grid-item />
      <n-grid-item class="gird-item">
        <span class="text-info">Title</span>
        <n-input
          v-model:value="data.title"
          type="text"
          placeholder="Input a title"
        />
      </n-grid-item>
      <n-grid-item class="gird-item">
        <span class="text-info">Actor</span>
        <n-input
          v-model:value="data.actor"
          type="text"
          placeholder="Actor name"
        />
      </n-grid-item>
      <n-grid-item class="gird-item">
        <span class="text-info">Year</span>
        <n-input
          type="text"
          v-model:value="data.year"
          :allow-input="onlyAllowNumber"
          placeholder="Input a number"
        />
      </n-grid-item>
      <n-grid-item class="gird-item">
        <span class="text-info">Genre</span>
        <n-select v-model:value="data.genre" multiple :options="genreOptions" />
      </n-grid-item>
      <n-grid-item />
    </n-grid>

    <n-grid cols="2 400:4 600:6" style="margin-top: 20px">
      <n-grid-item />
      <n-grid-item />
      <n-grid-item class="gird-item">
        <n-button
          class="search-button"
          type="error"
          @click="search"
          :disabled="data.loading"
          >Search</n-button
        >
      </n-grid-item>
      <n-grid-item class="gird-item">
        <n-tooltip placement="top-start" trigger="hover">
          <template #trigger>
            <n-button
              class="search-button"
              type="info"
              :disabled="data.loading"
              @click="getRandomMovies"
            >
              I'm feeling lucky</n-button
            >
          </template>
          Get random movies by a random actor
        </n-tooltip>
      </n-grid-item>
      <n-grid-item>
        <n-tooltip placement="top-start" trigger="hover">
          <template #trigger>
            <n-button quaternary size="tiny" circle @click="resetFilters"
              >X</n-button
            >
          </template>
          Reset the filters
        </n-tooltip>
      </n-grid-item>
      <n-grid-item />
    </n-grid>
    <div v-if="data.movieCardData.length > 0">
      <MovieCards :cards="data.movieCardData" />
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import { cardData } from "./mockData";
import { cardDataType, payloadType } from "./types";
import { reactive, ref } from "vue";
import {
  NButton,
  NSelect,
  NInput,
  NDivider,
  NGrid,
  NGridItem,
  NTooltip,
  NConfigProvider,
  darkTheme,
} from "naive-ui";

import MovieCards from "./MovieCards.vue";
const data = reactive({
  movieCardData: [] as Array<cardDataType>,
  genre: ref([]),
  title: ref(""),
  actor: ref(""),
  year: ref(""),
  loading: ref(false),
});
const onlyAllowNumber = (value: string) =>
  (!value || /^\d+$/.test(value)) && Number(value) < 2100;
const search = async () => {
  if (!data.actor && !data.year && !data.genre.length && !data.title) {
    data.movieCardData = [];
    return;
  }
  const payload = {
    title: data.title,
    actor: data.actor,
    year: data.year,
    genre: data.genre,
  };
  data.loading = true;
  data.movieCardData = await mockHttpRequest(payload)
    .catch(() => {
      alert("Something went wrong. Please try again later.");
      return new Promise<Array<cardDataType>>((resolve) => {
        resolve([]);
      });
    })
    .finally(() => {
      data.loading = false;
    });
};
const mockHttpRequest = async (payload: payloadType) => {
  // ! keep this console log for demo purpose
  console.log(`payload:`, JSON.stringify(payload, null, 2));
  // mimic a http request delay
  const sleep = (s = 0) => new Promise((r) => setTimeout(r, s));
  await sleep(200);
  return new Promise<Array<cardDataType>>((resolve) => {
    const result = cardData.filter((card) => {
      const { title, actor, year, genre } = payload;
      const matchTitle = title
        ? card.title.toLowerCase().includes(title.toLowerCase().trim())
        : true;
      const matchActor = actor
        ? card.actors
            .map((i) => i.name.toLowerCase())
            .some((i) => i.includes(actor.toLowerCase().trim()))
        : true;
      const matchYear = year
        ? card.release_date.substring(0, 4) === year
        : true;
      const matchGenre =
        genre.length > 0
          ? card.genre.map((i) => i.id).some((g) => genre.includes(String(g)))
          : true;
      return matchTitle && matchActor && matchYear && matchGenre;
    });
    resolve(result);
  });
};
const resetFilters = () => {
  data.title = "";
  data.actor = "";
  data.year = "";
  data.genre = [];
};

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

const getRandomMovies = async () => {
  data.title = "";
  data.actor = "";
  data.year = "";
  data.genre = [];
  // get random movies by actor names automatically
  const dataIndex = getRandomInt(cardData.length);
  const actorIndex = getRandomInt(cardData[dataIndex].actors.length);
  data.actor = cardData[dataIndex].actors[actorIndex].name;
  search();
};
// generally, the genreOptions could come from the backend
const genreOptions = ref([
  {
    value: "1",
    label: "Family",
  },
  {
    value: "2",
    label: "Drama",
  },
  {
    value: "3",
    label: "Comedy",
  },
  {
    value: "4",
    label: "Crime",
  },
  {
    value: "5",
    label: "Sci-Fi",
  },
  {
    value: "6",
    label: "Romance",
  },
  {
    value: "7",
    label: "Indie",
  },
  {
    value: "8",
    label: "Western",
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

.copy-info {
  margin-left: 10px;
  font-size: 12px;
  color: #999;
}
.text-info {
  color: #fff;
}
</style>
