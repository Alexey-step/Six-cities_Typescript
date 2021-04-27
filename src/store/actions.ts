import {Offer, Review, UserAuthorize} from "../types";

export enum ActionType {
  SET_CITY = `main/setCity`,
  SET_OPTION = `main/setOption`,
  SET_AUTHORIZATION = `user/setAuthorization`,
  SET_OFFERS = `main/setOffers`,
  SET_NEABY_OFFERS = `proprty/setNearbyOffers`,
  SET_REVIEWS = `proprty/setReviews`,
  SET_FAVORITES = `favorite/setFavorites`,
  REDIRECT_TO_ROUTE = `login/redirectToRoute`,
  SET_OFFER = `property/setOffer`,
  SET_IS_LOADED = `property/setIsLoaded`,
  SET_DISABLED = `property/setDisabled`,
  SET_IS_ERROR = `property/setIsError`,
  UPDATE_OFFERS = `main/updateOffers`,
  UPDATE_FAVORITES = `favorite/updateFavorites`,
  UPDATE_OFFER = `property/updateOffer`,
  UPDATE_NEARBY_OFFERS = `property/updateNearbyOffers`,
  SET_IS_DATA_LOADED = `main/setIsDataLoaded`
}

interface SetCityAction {
  type: ActionType.SET_CITY;
  payload: string;
}

interface SetOptionAction {
  type: ActionType.SET_OPTION;
  payload: string;
}

interface SetAuthorizationAction {
  type: ActionType.SET_AUTHORIZATION;
  payload: UserAuthorize;
}

interface SetOffersAction {
  type: ActionType.SET_OFFERS;
  payload: Array<Offer>;
}

interface SetNearbyOffersAction {
  type: ActionType.SET_NEABY_OFFERS;
  payload: Array<Offer>;
}

interface SetReviewsAction {
  type: ActionType.SET_REVIEWS;
  payload: Array<Review>;
}

interface SetFavoritesAction {
  type: ActionType.SET_FAVORITES;
  payload: Array<Offer>;
}

interface SetOfferAction {
  type: ActionType.SET_OFFER;
  payload: Offer;
}

interface SetIsLoadedAction {
  type: ActionType.SET_IS_LOADED;
  payload: boolean;
}

interface RedirectAction {
  type: ActionType.REDIRECT_TO_ROUTE;
  payload: string;
}

interface SetDisabledAction {
  type: ActionType.SET_DISABLED;
  payload: boolean;
}

interface SetIsErrorAction {
  type: ActionType.SET_IS_ERROR;
  payload: boolean;
}

interface UpdateOffersAction {
  type: ActionType.UPDATE_OFFERS;
  payload: Offer;
}

interface UpdateFavoritesAction {
  type: ActionType.UPDATE_FAVORITES;
  payload: Offer;
}

interface UpdateOfferAction {
  type: ActionType.UPDATE_OFFER;
  payload: Offer;
}

interface UpdateNearbyOffersAction {
  type: ActionType.UPDATE_NEARBY_OFFERS;
  payload: Offer;
}

interface SetIsDataLoadedAction {
  type: ActionType.SET_IS_DATA_LOADED;
  payload: boolean;
}

export type ActionTypes =
  | SetCityAction
  | SetOptionAction
  | SetAuthorizationAction
  | SetOffersAction
  | SetNearbyOffersAction
  | SetReviewsAction
  | SetFavoritesAction
  | SetDisabledAction
  | SetIsErrorAction
  | RedirectAction
  | UpdateOffersAction
  | UpdateFavoritesAction
  | UpdateOfferAction
  | UpdateNearbyOffersAction
  | SetIsDataLoadedAction
  | SetOfferAction
  | SetIsLoadedAction;
