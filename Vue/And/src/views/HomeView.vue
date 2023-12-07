<template>
    <div>
        <h1>Главная</h1>
    </div>
</template>

<script>
import ProductCard from "./AboutView.vue";
export default {
    data () {
        return {
            product: [{
          id: 1,
          name: "Product 1",
          description: "Description for product 1",
          price: 100,
          image: "path/to/image1.jpg",
        },
        {
          id: 2,
          name: "Product 2",
          description: "Description for product 2",
          price: 200,
          image: "path/to/image2.jpg",
        },
        // add more products
    ],
        }
    },
    methods: {

    },
    async beforeMount(){

    },
}
</script>

<style lang="scss" scoped>

</style>