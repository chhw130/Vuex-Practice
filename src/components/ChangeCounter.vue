<script setup>
import { useStore } from 'vuex';

const store = useStore();

const countUpBtnHandler = () => {
  store.commit('increment');
};
</script>

<template>
  <button @click="countUpBtnHandler">Up</button>
</template>
