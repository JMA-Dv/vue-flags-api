<template>
  <div class="text-center">
    <h3>Continents</h3>

    <div class="btn-group">
      <div
        class="btn btn-dark"
        v-for="cont in continents"
        :key="cont"
        @click="filterContries(cont)"
      >
        {{ cont }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const continents = computed(() => store.state.continents);
    const filterContries = (continent) =>
      store.dispatch("filterRegion", continent);

    return { continents, filterContries };
  },
};
</script>