import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealByName from '../views/MealByName.vue'
import MealByIngredient from '../views/MealByIngredient.vue'
import MealByLetter from '../views/MealByLetter.vue'
import DefaultLayout from '../Components/DefaultLayout.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: DefaultLayout,
      children:[
        {
          path: '/',
          name: "home",
          component: Home
        },
        {
          path: '/by-name/:name?',
          name: "byName",
          component: MealByName
        },
        {
          path: '/by-ingredient/:ingredient',
          name: "byIngredient",
          component: MealByIngredient
        },
        {
          path: '/ingredients',
          name: "Ingredients",
          component: Ingredients
        },
        {
          path: '/by-letter/:letter?',
          name: "byLetter",
          component: MealByLetter
        },
        {
          path: '/meal/:id',
          name: "mealDetails",
          component: MealDetails
        }
        
      ]

    },
   
  ]
})
  
export default router
