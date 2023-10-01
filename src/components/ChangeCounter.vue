<script setup>
import { useStore } from 'vuex';

const store = useStore();

const countUpBtnHandler = () => {
  store.getters.finalCounter;
};
</script>

<template>
  <button @click="countUpBtnHandler">Up</button>
</template>
