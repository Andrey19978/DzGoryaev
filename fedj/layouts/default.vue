<template>
    <header class="bg-emerald-950 text-white shadow-xl w-full p-6 flex gap-2 justify-between">
        <nav class="space-x-2">
            <MuxLink to="/" class="border-2 rounded p-1 hover:text-teal-100 hover:border-teal-100">Главная</MuxLink>
            <MuxLink to="/about" class="border-2 rounded p-1 hover:text-teal-100 hover:border-teal-100">О нас</MuxLink>
        </nav>
    </header>
    <main class="container bg-gray-100 mx-auto">
        <slot />
    </main>
    <footer>

    </footer>
</template>
<script setup>

</script>
<style scoped>
</style>