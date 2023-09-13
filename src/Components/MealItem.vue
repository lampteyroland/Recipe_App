<template>
      <div>
      <div class="bg-white shadow rounded-xl hover:scale-105 transition-all "  >
        <router-link :to="{name: 'mealDetails', params:{id: meal.idMeal}}" ><img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-xl w-full h-48 object-cover"> 
        </router-link>
        <div class="p-3">
          <h3 class="font-bold text-xl mb-2 text-orange-500">{{ meal.strMeal }}</h3>  
        </div>
      <div class="flex items-center justify-between">
        <a :href="meal.strYoutube" target="_blank" 
        class="px-3 py-2 m-2 rounded border-2 text-white border-red-500 bg-red-500 hover:bg-red-600 hover:text-white transition-colors">YouTube </a>
        
      </div>
    </div>     

     </div> 
  
</template>

<script setup>

const {meal } =defineProps({
    meal: {
        required: true, 
        type: Object
    }
})
</script>