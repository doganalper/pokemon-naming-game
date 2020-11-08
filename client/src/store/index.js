import Vue from "vue";
import Vuex from "vuex";
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isGameStarted: false,
    playerName: "",
    point: 0,
    rightGuessCount: 0,
    openDetail: false,
    failsCount: 0,
    isFailed: false,
  },
  getters,
  mutations,
  actions: {},
});
