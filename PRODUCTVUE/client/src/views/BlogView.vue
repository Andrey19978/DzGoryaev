<template>
    <div>
        <h1>Blog</h1>
    </div>
    <div class="products">
        <ProductCard v-for="item in products" :products="item" :key="item.id"/>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
export default {
    components: {
        ProductCard: ProductCard,
    },
    data() {
        return {
            products: [],
        }
    },
    methods: {

    },
    async BeforeMount(){
        const data = await fetch('')
        const js = await data.json()
        this.products = js.data;
    }
}
</script>

<style>
.product-card{
    width: 90%;
    height: max-content;
    margin: 20px auto 20px auto;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    gap: 20px;
}
</style>