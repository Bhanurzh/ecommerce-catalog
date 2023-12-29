<template>
  <div v-if="isLoading">
    <SkeletonProductCard />
  </div>
  <div v-else>
    <p>{{ product.id }}</p>
    <p>Title: {{ product.title }}</p>
    <p>Price: ${{ product.price }}</p>
    <p>Description: {{ product.description }}</p>
    <p>Category: {{ product.category }}</p>
    <img :src="product.image" :alt="product.title" width="200px" height="200px" />
    <button @click="getNextProduct">Next Product</button>
  </div>
</template>

<script>
import axios from "axios";
import SkeletonProductCard from "./SkeletonProductCard.vue";

export default {
  name: "ProductCard",
  components: {
    SkeletonProductCard,
  },
  data() {
    return {
      isLoading: true,
      product: {},
      currentId: 1,
    };
  },
  methods: {
    async getProductById() {
      this.isLoading = true;
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${this.currentId}`
        );
        this.product = response.data;
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
    getNextProduct() {
      if (this.currentId < 20) {
        this.currentId++;
      } else {
        this.currentId = 1;
      }
      this.getProductById();
    },
  },
  mounted() {
    this.getProductById();
  },
};
</script>
