import { createRouter, createWebHistory } from "vue-router";

const Product = () => import("../views/Product.vue");

const routes = [
  {
    path: "/",
    name: "ProductPage",
    component: Product,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
