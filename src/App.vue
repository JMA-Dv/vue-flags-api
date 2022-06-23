<template>
<div class="container">

  <h1 class="text-center">Contries</h1>
  <Searcher/>
  <Continents/>
  <CardList/>
</div>
</template>

<script>
import CardList from "./components/cardList.vue";
import Continents from "./components/Continents.vue";
import Searcher from "./components/Searcher.vue";

export default {
  name: "App",
  components: { CardList, Continents, Searcher },
};
</script>
