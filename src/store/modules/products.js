import axios from "axios";

const state = {
  products: [],
  filteredProducts: [],
};

const getters = {
  ALL_PRODUCTS: (state, getters, rootState) => {
    // // eslint-disable-next-line no-debugger
    // debugger;
    if (!rootState.search.keyword) {
      return state.products;
    } else if (rootState.search.keyword) {
      return state.filteredProducts;
    } else {
      return state.products;
    }
  },
};

const actions = {
  async getProducts({ commit }) {
    const response = await axios.get(
      "https://vuex-shopping-default-rtdb.firebaseio.com/products.json"
    );
    commit("SET_PRODUCTS", response.data);
  },
  filterProducts({ commit, state }, payload) {
    const result = state.products.filter((p) =>
      p.name.toLowerCase().includes(payload)
    );
    commit("SET_FILTERED_PRODUCTS", result);
  },
};

const mutations = {
  SET_PRODUCTS: (state, payload) => (state.products = payload),
  SET_FILTERED_PRODUCTS: (state, payload) => (state.filteredProducts = payload),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
