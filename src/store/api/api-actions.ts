import * as ActionCreator from "../action-creators";
import {ActionType, ActionTypes} from "../actions";
import {adaptToClient, adaptReviewsToClient, adaptAuthInfoToClient} from "../../common";
import {APIRoute, AppRoute} from "../../const";
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";
import {AxiosInstance} from "axios";
import {CommentPost} from "../../propTypes";

export type AppThunk<ReturnType = void> = ThunkAction<
  Promise<ReturnType>,
  any,
  AxiosInstance,
  Action<ActionType>
>;

export const fetchOffersList = (): AppThunk<ActionTypes> => (dispatch, _getState, api) => (
  api.get(`${APIRoute.OFFERS}`)
   .then(({data}) => dispatch(ActionCreator.setOffers(data.map(adaptToClient))))
   .catch(() =>
     dispatch(ActionCreator.setIsError(true))
   )
);

export const checkAuth = (): AppThunk<ActionTypes> => (dispatch, _getState, api) => (
  api.get(`${APIRoute.LOGIN}`)
    .then(({data}) => dispatch(ActionCreator.setAuthorization(adaptAuthInfoToClient(data))))
    .catch(() => dispatch(ActionCreator.setAuthorization(null)))
);

export const login = ({login: email, password}): AppThunk => (dispatch, _getState, api) => (
  api.post(`${APIRoute.LOGIN}`, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.setAuthorization(adaptAuthInfoToClient(data)));
      dispatch(ActionCreator.redirectToRoute(`${AppRoute.MAIN}`));
    })
    .catch(() => {})
);

export const logout = (): AppThunk => (dispatch, _getState, api) =>
  api.get(`${APIRoute.LOGOUT}`)
    .then(() => {
      dispatch(ActionCreator.setAuthorization(null));
      dispatch(ActionCreator.redirectToRoute(`${AppRoute.MAIN}`));
      dispatch(ActionCreator.setIsDataLoaded(false));
      dispatch(fetchOffersList());
    })
    .catch(() => {})
;

export const fetchFavorites = (): AppThunk<ActionTypes> => (dispatch, _getState, api) =>
   api.get(`${APIRoute.FAVORITE}`)
   .then(({data}) => (dispatch(ActionCreator.setFavorite(data.map(adaptToClient)))))
   .catch(() =>
     dispatch(ActionCreator.setIsError(true))
   )

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
    .finally(() => dispatch(ActionCreator.setIsLoaded(true)));
};

export const updateComments = (comment: CommentPost, id: string): AppThunk<ActionTypes> => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setDisabled(true));
  return api.post(`${APIRoute.COMMENTS}/${id}`, comment)
    .then(({data}) => dispatch(ActionCreator.setReviews(data.map(adaptReviewsToClient))))
    .catch(() =>
      dispatch(ActionCreator.setIsError(true))
    )
    .finally(() => dispatch(ActionCreator.setDisabled(false)));
};

export const updateOffers = (id: number, status: boolean): AppThunk<ActionTypes> => (dispatch, _getState, api) =>
  api.post(`${APIRoute.FAVORITE}/${id}/${Number(status)}`)
    .then(({data}) => dispatch(ActionCreator.updateOffers((adaptToClient(data)))))
    .catch(() =>
      dispatch(ActionCreator.setIsError(true))
    );
;

export const updateFavorites = (id: number, status: boolean): AppThunk => (dispatch, _getState, api) =>
  api.post(`${APIRoute.FAVORITE}/${id}/${Number(status)}`)
    .then(({data}) => {
      dispatch(ActionCreator.updateFavorites(adaptToClient(data)));
      dispatch(ActionCreator.updateOffers(adaptToClient(data)));
    })
    .catch(() => {
      dispatch(ActionCreator.setIsError(true))
    });
;

export const updateOffer = (id: string, status: boolean): AppThunk => (dispatch, _getState, api) =>
  api.post(`${APIRoute.FAVORITE}/${id}/${Number(status)}`)
   .then(({data}) => {
     dispatch(ActionCreator.updateOffer(adaptToClient(data)));
     dispatch(ActionCreator.updateOffers(adaptToClient(data)));
   })
   .catch(() => {
     dispatch(ActionCreator.setIsError(true))
   })
;

export const updateNearbyOffers = (id: number, status: boolean): AppThunk => (dispatch, _getState, api) =>
  api.post(`${APIRoute.FAVORITE}/${id}/${Number(status)}`)
   .then(({data}) => {
     dispatch(ActionCreator.updateNearbyOffers(adaptToClient(data)));
     dispatch(ActionCreator.updateOffers(adaptToClient(data)));
   })
   .catch(() => {
     dispatch(ActionCreator.setIsError(true))
   })
;
