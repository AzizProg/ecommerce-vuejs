<template>
    <div id="page-wrap">
        <div id="img-wrap">
            <img v-bind:src="product.imageUrl" alt="product image" />
        </div>
        <div id="product-details">
            <h1>{{ product.name }}</h1>
            <h3 id="price">${{ product.price }}</h3>
            <p>Average rating: {{ product.averageRating }}</p>
            <button id="add-to-cart">Add to Cart</button>
            <h4>
                Description
            </h4>
            <p>{{ product.description }}</p>
        </div>
    </div>
</template>
    
<script>
import { products } from '../fake-data';
export default {
    name: 'ProductDetailPage',
    data() {
        return {
            product: products.find((p) => p.id === this.$route.params.id),
        }
    }
};
</script>
    
<style scoped>
#add-to-cart {
    width: 100%;
}

#price {
    position: absolute;
    top: 24px;
    right: 16px;
}
</style>