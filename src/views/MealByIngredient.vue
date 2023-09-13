<template>
  <div class="grid grid-cols-3 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal"/>
    <div v-if="!meals.length" class="flex justify-center text-gray-600">
      No Meals showing now 
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import MealItem from '../Components/MealItem.vue' // Import the MealItem component

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient);
});
</script>
