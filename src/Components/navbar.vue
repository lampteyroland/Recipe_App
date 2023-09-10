<template>
      <header class="bg-white-100 flex justify-between items-stretch h-16 shadow">
        <router-link to="/" class="inline-flex items-center h-full px-5">Home</router-link>

        <div class="flex items-center gap-1">
            <router-link :to="{name: 'byName'}" class="inline-flex items-center px-2 transition-colors hover:bg-purple-100" >
                Search Meals
            </router-link>
            <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-2 transition-colors hover:bg-purple-100" >
                Meals By Letter  
            </router-link>
            <router-link :to="{name: 'byIngredient'}" class="inline-flex items-center px-2 transition-colors hover:bg-purple-100" >
                 Meals by Ingredient
            </router-link>
        </div>


    </header>
</template>