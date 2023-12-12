<template>
  <div>
    <h1>About</h1>
  </div>
  <div class="product-card">
    <img :src="product.image" alt="product image" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <p>Price: {{ product.price }}</p>
 </div>
</template>

<script>
export default {
 props: {
    product: {
      type: Object,
      required: true,
    },
 },
};
</script>

<style  scoped>

</style>