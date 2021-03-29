import {ActionType} from "./actions";
import {createAction} from '@reduxjs/toolkit';
import {UserAuthorize, Offer, Review} from "../propTypes"

export const setCity = createAction(ActionType.SET_CITY, (city: string) => {
  return {
    payload: city
  };
});
export const setOption = createAction(ActionType.SET_OPTION, (option: string) => {
  return {
    payload: option
  };
});
export const setAuthorization = createAction(ActionType.SET_AUTHORIZATION, (data: UserAuthorize) => {
  return {
    payload: data
  };
});
export const setOffers = createAction(ActionType.SET_OFFERS, (offers: Array<Offer>) => {
  return {
    payload: offers
  };
});
export const setNearbyOffers = createAction(ActionType.SET_NEABY_OFFERS, (data: Array<Offer>) => {
  return {
    payload: data
  };
});
export const setReviews = createAction(ActionType.SET_REVIEWS, (data: Array<Review>) => {
  return {
    payload: data
  };
});
export const setFavorite = createAction(ActionType.SET_FAVORITES, (data: Array<Offer>) => {
  return {
    payload: data
  };
});
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url: string) => {
  return {
    payload: url
  };
});
export const setOffer = createAction(ActionType.SET_OFFER, (data: Offer) => {
  return {
    payload: data
  };
});
export const setIsLoaded = createAction(ActionType.SET_IS_LOADED, (isLoaded: boolean) => {
  return {
    payload: isLoaded
  };
});
export const setDisabled = createAction(ActionType.SET_DISABLED, (isDisabled: boolean) => {
  return {
    payload: isDisabled
  };
});
export const setIsError = createAction(ActionType.SET_IS_ERROR, (isError: boolean) => {
  return {
    payload: isError
  };
});

export const updateOffers = createAction(ActionType.UPDATE_OFFERS, (data: Offer) => {
  return {
    payload: data
  };
});

export const updateFavorites = createAction(ActionType.UPDATE_FAVORITES, (data: Offer) => {
  return {
    payload: data
  };
});

export const updateOffer = createAction(ActionType.UPDATE_OFFER, (data: Offer) => {
  return {
    payload: data
  };
});

export const updateNearbyOffers = createAction(ActionType.UPDATE_NEARBY_OFFERS, (data: Offer) => {
  return {
    payload: data
  };
});

export const setIsDataLoaded = createAction(ActionType.SET_IS_DATA_LOADED, (isLoad: boolean) => {
  return {
    payload: isLoad
  };
});
