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
