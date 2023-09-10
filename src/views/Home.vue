<template>
  
   
     <div class="flex justify-center gap-2 mt-2">
       <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter in letters" :key="letter">
         {{ letter }}
       </router-link>
     </div>

     <pre>
      <!-- {{ ingredients  }} -->
     </pre>
   </template>
   
   <script setup>
   import store from '../store';
   import { computed, onMounted,ref } from 'vue';
   import axiosClient from '../axiosClient.js'
   
   
   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
   const ingredients = ref([])

   onMounted(async () => {
     const response = await axiosClient.get('/list.php?i=list');
     console.log(response.data);
     ingredients.value = response.data
   });
   </script>

