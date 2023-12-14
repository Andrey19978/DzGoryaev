<template>
    <div class="product-card">
        <img src="client\src\assets\gory-priroda-les-7463.jpg" alt="">
        <h3>Title</h3>
        <p>Description</p>
        <p>2500</p>
    </div>
</template>

<script>
export default{
    props: {
        product:{},
    },
    data(){
        return{
            baseURL: 'http://localhost:1337'
        }
    },
    computed: {
        priceRedact(){
            let sale = this.product.attributes.dale
            return sale > 0 ? true: false
        }
    }
}
</script>

<style scoped>
.product-card{
    width: 200px;
    height: 300px;
    box-shadow: 0 0 10px black;
    border-radius: 10px ;
}
</style>