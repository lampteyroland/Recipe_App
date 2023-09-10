<template>

<div class="p-8">
  <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
      v-model="keyword"
      @input="searchMeals"
    />
     </div>

    <div class="grid grid-cols-3 md:grid-cols-3 gap-5 p-8">
      <div  v-for="meal in meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
        <router-link :to="{name: 'mealDetails', params:{id: meal.idMeal}}" ><img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-xl w-full h-48 object-cover"> 
        </router-link>
        <div class="p-3">
          <h3 class="font-bold mb-4">{{ meal.strMeal }}</h3>  
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      <div class="flex items-center justify-between">
        <a href="meal.strYoutube" target="_blank" 
        class="px-3 py-2 m-2 rounded border-2 text-white border-red-500 bg-red-500 hover:bg-red-600 hover:text-white transition-colors">YouTube </a>
        
      </div>
    </div>  

     </div>
<!-- 
     <div>
      <pre>{{meals }}</pre>
     </div> -->

</template> 

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';

const keyword = ref('');
const route = useRoute();
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
   store.dispatch('searchMeals', keyword.value);       
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals();
  }
});
</script>
