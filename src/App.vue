<script setup>
import { useStore } from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';

const store = useStore();

const count = store.state.counter;
</script>
<template>
  <base-container title="Vuex">
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
