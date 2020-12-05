export const addFavoritesRequest = (repository) => ({
  type: "ADD_FAVORITE_REQUEST",
  payload: {
    repository,
  },
});
export const addFavoritesSuccess = (data) => ({
  type: "ADD_FAVORITE_SUCCESS",
  payload: {
    data,
  },
});
