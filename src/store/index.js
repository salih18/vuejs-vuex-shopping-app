import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products";
import search from "./modules/search";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { products, search },
});
