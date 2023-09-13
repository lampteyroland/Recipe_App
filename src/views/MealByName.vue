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
      <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal"/>
      <div v-if="!meals.length" class="flex justify-center text-gray-600">
        No Meals showing now 
    </div>
     </div>
<!-- 
     <div>
      <pre>{{meals }}</pre>
     </div> -->

     <template>

</template>

</template> 

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../Components/MealItem.vue';

const keyword = ref('');
const route = useRoute();
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
if(keyword.value){
  store.dispatch('searchMeals', keyword.value);       
}else {
  store.commit("setSearchedMeals", [])
}
}

onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals();
  }
});
</script>
