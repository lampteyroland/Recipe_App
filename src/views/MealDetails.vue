<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-3">
    <div>
      <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
    </div>
    <div>
      <strong class="font-bold">Area:</strong> {{ meal.strArea }}
    </div>
    <div>
      <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
    </div>
  </div>

  <div class="my-3">
    <h2 class="text-2xl font-semibold mb-2">Instructions</h2>
    {{ meal.strInstructions }}
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2">
    <div>
      <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul>
        <template v-for="(item, index) of new Array(20)">
          <li v-if="meal[`strIngredient${index + 1}`]">
            {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
          </li>
        </template>
      </ul>
    </div>
    <div>
      <h2 class="text-2xl font-semibold mb-2">Measurements</h2>
      <ul>
        <template v-for="(item, index) of new Array(20)">
          <li v-if="meal[`strMeasure${index + 1}`]">
            {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
          </li>
        </template>
      </ul>
    </div>
  </div>

  <div class="mt-4 mb-6">
    <AButton isLink :href="meal.strYoutube" class="px-3 py-2 rounded border-2 text-white border-red-500 bg-red-700">YouTube</AButton>
    <AButton isLink :href="meal.strSource" class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 border-red-500">View Source</AButton>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import AButton from '../Components/AButton.vue';

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient
    .get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals?.[0] || {};
    })
    .catch((error) => {
      console.error('Error fetching meal:', error);
    });
});
</script>

<script>
import AButton from '../Components/AButton.vue';

export default {
  components: {
    AButton,
  },
};
</script>
