import {createReducer} from "@reduxjs/toolkit";
import {setCity, setOption, setOffers, updateOffers, setIsError, setIsDataLoaded} from "../action-creators";
import {Options, Cities} from "../../const";
import {Offer} from "../../types";

export interface MainDataInitialState {
  activeLocation: string,
  offers: Offer[],
  option: string,
  isDataLoaded: boolean,
  isError: boolean
}

export const initialState: MainDataInitialState = {
  activeLocation: Cities.PARIS,
  offers: [],
  option: Options.POPULAR,
  isDataLoaded: false,
  isError: false
};

const mainData = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.activeLocation = action.payload;
    })
    .addCase(setIsError, (state, action) => {
      state.isError = action.payload;
    })
    .addCase(setIsDataLoaded, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setOption, (state, action) => {
      state.option = action.payload;
    })
    .addCase(updateOffers, (state, action) => {
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      state.offers = [
        ...state.offers.slice(0, index),
        action.payload,
        ...state.offers.slice(index + 1)
      ];
    });
});

export {mainData};
