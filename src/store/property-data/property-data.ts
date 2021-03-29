import {createReducer} from '@reduxjs/toolkit';
import {setNearbyOffers, setReviews, setOffer, setIsLoaded, setDisabled, updateOffer, updateNearbyOffers} from "../action-creators";
import {Offer, Review} from "../../propTypes";

export interface PropertyDataInitialStateType {
  offer: Offer,
  isLoaded: boolean,
  nearbyOffers: Array<Offer>,
  reviews: Array<Review>,
  isDisabled: boolean
}

export const initialState: PropertyDataInitialStateType = {
  offer: null,
  isLoaded: false,
  nearbyOffers: [],
  reviews: [],
  isDisabled: false
};

const propertyData = createReducer(initialState, (builder) => {
  builder
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setDisabled, (state, action) => {
      state.isDisabled = action.payload;
    })
    .addCase(setIsLoaded, (state, action) => {
      state.isLoaded = action.payload;
    })
    .addCase(updateOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(updateNearbyOffers, (state, action) => {
      const index = state.nearbyOffers.findIndex((offer) => offer.id === action.payload.id);
      state.nearbyOffers = [
        ...state.nearbyOffers.slice(0, index),
        action.payload,
        ...state.nearbyOffers.slice(index + 1)
      ];
    });
});

export {propertyData};
