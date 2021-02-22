import { createStore } from 'vuex';

export default createStore({
  state: {
    count: localStorage.getItem('count') || 0,
  },
  mutations: {
    increment(state) {
      // mutate state
      state.count++;
      localStorage.setItem('count', state.count);
    },
    clear(state) {
      // mutate state
      state.count = 0;
      localStorage.setItem('count', state.count);
    },
  },
  actions: {},
  modules: {},
});
