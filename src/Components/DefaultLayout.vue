<template>
    <div class="bg-gray-100 h-full">
         
    </div>

    <navbar/>

    <main>
        <router-view></router-view>
    </main>
</template>

<script setup>
import navbar from './navbar.vue';

components: {
    navbar
}
</script>