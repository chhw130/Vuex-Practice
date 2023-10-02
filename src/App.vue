<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';

const store = useStore();

const count = computed(() => {
  return store.state.counter;
});
</script>
<template>
  <base-container>
    <h3>{{ count }}</h3>
    <ChangeCounter />
  </base-container>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
