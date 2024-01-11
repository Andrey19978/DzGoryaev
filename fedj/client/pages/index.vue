<template>
    <header class="bg-emerald-950 text-white shadow-xl w-full p-6 flex gap-2 justify-between">
        <nav class="space-x-2">
            <MuxLink to="/" class="border-2 rounded p-1 hover:text-teal-100 hover:border-teal-100">Главная</MuxLink>
            <MuxLink to="/about" class="border-2 rounded p-1 hover:text-teal-100 hover:border-teal-100">О нас</MuxLink>
        </nav>
    </header>
    <main class="container bg-gray-100 mx-auto flex-auto">
        <slot />
    </main>
    <div class="text-center text-teal-950" id="DiTe">
        <h1 >{{ num }}</h1>
        <button @click="myCount" id="BuDi">count </button>
    </div>
    
<footer class="bg-emerald-950 text-white shadow-xl w-full p-6 flex gap-2 justify-between" >
    <nav class="space-x-2">
            <MuxLink to="/" class="border-2 rounded p-1 hover:text-teal-100 hover:border-teal-100">Главная</MuxLink>
            <MuxLink to="/about" class="border-2 rounded p-1 hover:text-teal-100 hover:border-teal-100">О нас</MuxLink>
        </nav>
</footer>
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
