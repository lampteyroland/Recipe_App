import axiosClient from '../axiosClient';

export const searchMeals = ({ commit }, keyword) => {
  return axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      commit('setSearchedMeals', data.meals);
    })
    .catch((error) => {
      // Handle errors here
    });
};
export const searchMealsByLetter = ({ commit }, letter) => {
  return axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      commit('setMealsByLetter', data.meals);
    })
    .catch((error) => {
      // Handle errors here
    });
};
export const searchMealsByIngredient = ({ commit }, ingredient) => {
  return axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({ data }) => {
      commit('setMealsByIngredient', data.meals);
    })
    .catch((error) => {
      // Handle errors here
    });
};
