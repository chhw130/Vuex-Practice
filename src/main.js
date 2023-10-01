import { createApp } from 'vue';

import App from './App.vue';
import { createStore } from 'vuex';

const app = createApp(App);

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = ++state.counter;
    },
  },

  getters: {
    finalCounter(state) {
      return (state.counter = ++state.counter);
    },
  },
});

app.use(store);

app.mount('#app');
