import { createStore } from 'vuex';

export default createStore({
  state: {
    count: localStorage.getItem('count') || 0,
    curMenu: sessionStorage.getItem('curMenu') || 'Hello',
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
    setMenu(state, menu) {
      state.curMenu = menu;
      sessionStorage.setItem('curMenu', menu);
    },
  },
  actions: {},
  modules: {},
});
