import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    groups: [],
    links: [],
    filteredLinks: [],
    activeGroup: 0,
  },
  getters: {
    getGroups(state) {
      return state.groups;
    },
    getLinks(state) {
      return state.links;
    },
    getFilteredLinks(state) {
      return state.filteredLinks;
    },
    getActiveGroup(state) {
      return state.activeGroup;
    },
  },
  mutations: {
    updateGroups(state, payload) {
      state.groups = payload;
    },
    updateLinks(state, payload) {
      state.links = payload;
    },
    updateFilteredLinks(state, payload) {
      state.filteredLinks = payload;
    },
    updateActiveGroup(state, payload) {
      state.activeGroup = payload;
    },
  },
  actions: {
    setGroups({ commit }) {
      commit("updateGroups", JSON.parse(localStorage.getItem("groups")));
    },
    setLinks({ commit }) {
      commit("updateLinks", JSON.parse(localStorage.getItem("links")));
    },
    setFilteredLinks({ commit }, payload) {
      commit("updateFilteredLinks", payload);
    },
    setActiveGroup({ commit }) {
      commit("updateActiveGroup", localStorage.getItem("activeGroup"));
    },
  },
});
