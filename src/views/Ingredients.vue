<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>

    <div class="p-8">
      <input
        type="text"
        class="rounded border-2 border-gray-200 w-full mb-3"
        placeholder="Search for Ingredients"
        v-model="keyword"
      />
    </div>

    <div v-for="ingredient in computedIngredients" :key="ingredient.id">
      <router-link :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }">
        <div class="block bg-white rounded p-3 mb-3 shadow">
          <h3 class="text-2xl font-bold mb-2 text-orange-500">{{ ingredient.strIngredient }}</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import axiosClient from '../axiosClient';

const ingredients = ref([]);
const keyword = ref('');

const computedIngredients = computed(() => {
  if (!keyword.value) return ingredients.value;

  return ingredients.value.filter(i => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()));
});

onMounted(() => {
  axiosClient.get('list.php?i=list')
    .then(({ data }) => {
      ingredients.value = data.meals;
    });
});
</script>
