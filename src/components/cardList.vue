<template>
  <div class="row">
    <div class="col-12" v-for="item in countries" :key="item.name">
      <Card :country="item"/>
      
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import Card from "./Card.vue";
export default {
    setup() {
        const store = useStore();
        const countries = computed(() => {
            return store.getters.topPopulation;
        });
        onMounted(async () => {
            await store.dispatch("getCountries");
            await store.dispatch("filterRegion",'Americas');
            
        });
        return { countries };
    },
    components: { Card }
};
</script>
