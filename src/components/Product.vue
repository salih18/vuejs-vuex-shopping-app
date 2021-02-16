<template>
  <v-card class="mx-auto my-12" max-width="374" height="625">
    <v-img eager height="250" v-bind:src="product.mediaUrl"></v-img>

    <v-card-title>{{ product.name }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="star"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">{{ star }} (413)</div>
      </v-row>

      <div class="my-4 subtitle-1">$ • {{ product.price }}</div>

      <div>
        {{ product.description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["product"],
  data: () => ({
    star: Number(Number.parseFloat(Math.random() * (5 - 1) + 1).toFixed(1)),
  }),
};
</script>
<style>
</style>