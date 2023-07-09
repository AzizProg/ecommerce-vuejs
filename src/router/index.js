import Vue from "vue";
import VueRouter from "vue-router";
import ProductPage from "../views/ProductPage.vue";
import ProductDetailPage from "../views/ProductDetailPage.vue";
import CardPage from "../views/CardPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/products",
    name: "Products",
    component: ProductPage,
  },
  {
    path: "/products/:id",
    name: "ProductDetail",
    component: ProductDetailPage,
  },
  {
    path: "/card",
    name: "Card",
    component: CardPage,
  },
  {
    path: "/",
    redirect: "/products",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
