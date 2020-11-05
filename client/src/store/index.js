import Vue from "vue";
import Vuex from "vuex";
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isGameStarted: false,
    playerName: "Alper",
    point: 0,
    rightGuessCount: 0,
  },
  getters,
  mutations,
  actions: {},
});
