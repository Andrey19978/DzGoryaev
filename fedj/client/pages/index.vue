<template>
    <div class="text-center text-teal-950" id="DiTe">
        <h1 >{{ num }}</h1>
        <button @click="myCount" id="BuDi">count </button>
    </div>
</template>

<script setup>

let title = ref("Главная страница")
let num = ref(33)
const myCount = () => {
    num.value++
}


</script>

<style scoped>

</style>