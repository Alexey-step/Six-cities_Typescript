import {createReducer} from '@reduxjs/toolkit';
import {setFavorite, updateFavorites} from "../action-creators";
import {Offer} from "../../propTypes";

interface FavoriteDataInitialStateType {
  favorites: Array<Offer>
}

export const initialState: FavoriteDataInitialStateType = {
  favorites: []
};

const favoriteData = createReducer(initialState, (builder) => {
  builder
    .addCase(setFavorite, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(updateFavorites, (state, action) => {
      const index = state.favorites.findIndex((favorite) => favorite.id === action.payload.id);
      state.favorites = [
        ...state.favorites.slice(0, index),
        ...state.favorites.slice(index + 1)
      ];
    });
});

export {favoriteData};
