import * as ActionCreator from "../action-creators";
import {ActionTypes} from "../actions";
import {adaptToClient, adaptReviewsToClient, adaptAuthInfoToClient} from "../../common";
import {APIRoute, AppRoute} from "../../const";
import {ThunkAction} from "redux-thunk";
import {AxiosInstance} from "axios";
import {CommentPost} from "../../types";

export type AppThunk<ReturnType = void> = ThunkAction<
  Promise<ReturnType>,
  any,
  AxiosInstance,
  ActionTypes
>;

export const fetchOffersList = (): AppThunk => async (dispatch, _getState, api) => {
  try {
    const { data } = await api.get(`${APIRoute.OFFERS}`);
    dispatch(ActionCreator.setOffers(data.map(adaptToClient)));
  } catch (e) {
    dispatch(ActionCreator.setIsError(true));
  }
};

export const checkAuth = (): AppThunk => async (dispatch, _getState, api) => {
  try {
    const { data } = await api.get(`${APIRoute.LOGIN}`);
    dispatch(ActionCreator.setAuthorization(adaptAuthInfoToClient(data)));
  } catch (e) {
    dispatch(ActionCreator.setAuthorization(null));
  }
};

export const login = ({login: email, password}): AppThunk => async (dispatch, _getState, api) => {
  try {
    const { data } = await api.post(`${APIRoute.LOGIN}`, { email, password });
    dispatch(ActionCreator.setAuthorization(adaptAuthInfoToClient(data)));
    dispatch(ActionCreator.redirectToRoute(`${AppRoute.MAIN}`));
  } catch (e) { }
  };

export const logout = (): AppThunk => async (dispatch, _getState, api) => {
  try {
    await api.get(`${APIRoute.LOGOUT}`);
    dispatch(ActionCreator.setAuthorization(null));
    dispatch(ActionCreator.redirectToRoute(`${AppRoute.MAIN}`));
    dispatch(ActionCreator.setIsDataLoaded(false));
    dispatch(fetchOffersList());
  } catch (e) { }
  };

export const fetchFavorites = (): AppThunk => async (dispatch, _getState, api) => {
   try {
    const { data } = await api.get(`${APIRoute.FAVORITE}`);
    dispatch(ActionCreator.setFavorite(data.map(adaptToClient)));
  } catch (e) {
    dispatch(ActionCreator.setIsError(true));
  }
};

export const fetchPropertyData = (id: string): AppThunk => (dispatch, _getState, api) => {
  return Promise.all([
    api.get(`${APIRoute.OFFERS}/${id}`),
    api.get(`${APIRoute.OFFERS}/${id}${APIRoute.NEARBY}`),
    api.get(`${APIRoute.COMMENTS}/${id}`)
  ])
    .then(([offer, nearby, reviews]) => {
      dispatch(ActionCreator.setOffer(adaptToClient(offer.data)));
      dispatch(ActionCreator.setNearbyOffers(nearby.data.map(adaptToClient)));
      dispatch(ActionCreator.setReviews(reviews.data.map(adaptReviewsToClient)));
    })
    .catch(() => {
      dispatch(ActionCreator.setIsError(true));
      dispatch(ActionCreator.redirectToRoute(`${AppRoute.NOT_FOUND}`));
    })
    .finally(() => {dispatch(ActionCreator.setIsLoaded(true))});
};

export const updateComments = (comment: CommentPost, id: string): AppThunk => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setDisabled(true));
  return api.post(`${APIRoute.COMMENTS}/${id}`, comment)
    .then(({data}) => {dispatch(ActionCreator.setReviews(data.map(adaptReviewsToClient)))})
    .catch(() => {
      dispatch(ActionCreator.setIsError(true))}
    )
    .finally(() => {dispatch(ActionCreator.setDisabled(false))});
};

export const updateOffers = (id: number, status: boolean): AppThunk=> async (dispatch, _getState, api) => {
  try {
    const { data } = await api.post(`${APIRoute.FAVORITE}/${id}/${Number(status)}`);
    dispatch(ActionCreator.updateOffers((adaptToClient(data))));
  } catch (e) {
    dispatch(ActionCreator.setIsError(true));
  }
};

export const updateFavorites = (id: number, status: boolean): AppThunk => async (dispatch, _getState, api) => {
  try {
    const { data } = await api.post(`${APIRoute.FAVORITE}/${id}/${Number(status)}`);
    dispatch(ActionCreator.updateFavorites(adaptToClient(data)));
    dispatch(ActionCreator.updateOffers(adaptToClient(data)));
  } catch (e) {
    dispatch(ActionCreator.setIsError(true));
  }
};

export const updateOffer = (id: string, status: boolean): AppThunk => async (dispatch, _getState, api) => {
  try {
    const { data } = await api.post(`${APIRoute.FAVORITE}/${id}/${Number(status)}`);
    dispatch(ActionCreator.updateOffer(adaptToClient(data)));
    dispatch(ActionCreator.updateOffers(adaptToClient(data)));
  } catch (e) {
    dispatch(ActionCreator.setIsError(true));
  }
};

export const updateNearbyOffers = (id: number, status: boolean): AppThunk => async (dispatch, _getState, api) => {
  try {
    const { data } = await api.post(`${APIRoute.FAVORITE}/${id}/${Number(status)}`);
    dispatch(ActionCreator.updateNearbyOffers(adaptToClient(data)));
    dispatch(ActionCreator.updateOffers(adaptToClient(data)));
  } catch (e) {
    dispatch(ActionCreator.setIsError(true));
  }
};
