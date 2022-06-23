<template>
  <input
    type="text"
    placeholder="Insert country"
    class="form-control my-3"
    v-model="inputText"
    @keyup="processInput"
  >
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from 'vuex';
export default {
  setup() {
    const inputText = ref('');
    const store = useStore();
    const processInput = async() => {
      store.dispatch('filterByName',inputText.value.toLowerCase());
    };
    return { inputText, processInput };
  },
};
</script>