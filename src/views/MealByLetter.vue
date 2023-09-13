<template>
 <div class="flex justify-center gap-2 mt-2">
       <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter in letters" :key="letter">
         {{ letter }}
       </router-link>
     </div>

     <!-- <div>
      <pre>  {{ meals  }}</pre>
     </div> -->

     
     <div class="grid grid-cols-3 md:grid-cols-3 gap-5 p-8">
      <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal"/>
      <div v-if="!meals.length" class="flex justify-center text-gray-600">
      No Meals showing now 
    </div>
     </div>

</template>

<script setup>
import store from '../store';
import { useRoute } from 'vue-router';
import { ref, computed, onMounted , watch} from 'vue';
import MealItem from '../Components/MealItem.vue';


const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const meals = computed(()=>store.state.mealsByLetter)

watch(
  route, () =>{
    store.dispatch('searchMealsByLetter', route.params.letter)

  }
)
onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter)
});

</script>