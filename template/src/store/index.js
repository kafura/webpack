import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';

import jsonplaceholder from './modules/jsonplaceholder';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  actions,
  getters,
  modules: {
    jsonplaceholder
  },
  mutations: {
  }
});

export default store;
