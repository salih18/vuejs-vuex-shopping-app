const state = {
  keyword: "",
};

const getters = {
  SEARCH_KEYWORD: (state) => state.keyword,
};

const actions = {
  setSearchKeyword: ({ commit }, payload) => {
    commit("SET_SEARCH_KEYWORD", payload);
  },
};

const mutations = {
  SET_SEARCH_KEYWORD: (state, payload) => {
    state.keyword = payload;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
