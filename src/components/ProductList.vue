<template>
  <div id="product-list">
    <v-container>
      <v-row justify="center">
        <v-col cols="8" md="6">
          <v-text-field
            label="Search Products"
            outlined
            clearable
            v-model="filterValue"
            @input="search()"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row v-if="ALL_PRODUCTS.length >= 0">
        <v-col
          cols="12"
          sm="4"
          md="3"
          v-for="product in ALL_PRODUCTS"
          :key="product.sku"
        >
          <Product v-bind:product="product" />
        </v-col>
      </v-row>
      <v-row v-show="ALL_PRODUCTS.length == 0">
        <h3>No products found!</h3>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Product from "./Product";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductList",
  components: {
    Product,
  },
  data() {
    return {
      filterValue: "",
    };
  },
  computed: {
    ...mapGetters(["ALL_PRODUCTS", "SEARCH_KEYWORD"]),
  },
  methods: {
    ...mapActions(["getProducts", "filterProducts", "setSearchKeyword"]),
    search() {
      this.setSearchKeyword(this.filterValue);
      this.filterProducts(this.filterValue);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style>
</style>