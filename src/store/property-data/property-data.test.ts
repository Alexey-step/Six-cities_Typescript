import {propertyData, initialState} from "./property-data";
import * as ActionCreator from "../action-creators";
import {ActionType} from "../actions";
import MockAdapter from "axios-mock-adapter";
import {fetchPropertyData, updateOffer, updateNearbyOffers, updateComments} from "../api/api-actions";
import {APIRoute} from "../../const";
import {reviews, offers, offer, cards} from "../../mocks/tests-mocks";
import {createAPI} from "../api/api";
import {CommentPost} from "../../propTypes";

export const api = createAPI(() => {});

describe(`Reducer work correctly`, () => {
  it(`Reducer should change isLoaded by setIsLoaded action creator given value`, () => {
    expect(propertyData(initialState, ActionCreator.setIsLoaded(true)))
      .toEqual({
        ...initialState,
        isLoaded: true
      });
  });
  it(`Reducer should change isDisabled by setDisabled action creator given value`, () => {
    expect(propertyData(initialState, ActionCreator.setDisabled(true)))
      .toEqual({
        ...initialState,
        isDisabled: true
      });
  });
  it(`Reducer should update reviews by load reviews`, () => {
    expect(propertyData(initialState, ActionCreator.setReviews(reviews.adapted)))
      .toEqual({
        ...initialState,
        reviews: reviews.adapted
      });
  });
  it(`Reducer should update nearbyOffers by load nearbyOffers`, () => {
    expect(propertyData(initialState, ActionCreator.setNearbyOffers(offers.adapted)))
      .toEqual({
        ...initialState,
        nearbyOffers: offers.adapted
      });
  });
  it(`Reducer should update offer by load offer`, () => {
    expect(propertyData(initialState, ActionCreator.setOffer(offer.adapted)))
      .toEqual({
        ...initialState,
        offer: offer.adapted
      });
  });
  it(`Reducer should update offer with updateOffer action creator`, () => {
    const state: any = {
      offer: cards.start[1]
    };
    const expectedState = {
      offer: cards.end[1]
    };
    expect(propertyData(state, ActionCreator.updateOffer(cards.change)))
      .toEqual(expectedState);
  });
  it(`Reducer should update nearbyOffers with updateNearbyOffers action creator`, () => {
    const state: any = {
      nearbyOffers: cards.start
    };
    const expectedState = {
      nearbyOffers: cards.end
    };
    expect(propertyData(state, ActionCreator.updateNearbyOffers(cards.change)))
      .toEqual(expectedState);
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels/:id, hotels/:id/nearby, comments/:id/`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const propertyLoader = fetchPropertyData("1");

    apiMock
      .onGet(`${APIRoute.OFFERS}/1`)
      .reply(200, offer.server)
      .onGet(`${APIRoute.OFFERS}/1${APIRoute.NEARBY}`)
      .reply(200, offers.server)
      .onGet(`${APIRoute.COMMENTS}/1`)
      .reply(200, reviews.server);

    return propertyLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFER,
          payload: offer.adapted
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_NEABY_OFFERS,
          payload: offers.adapted
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_REVIEWS,
          payload: reviews.adapted
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.SET_IS_LOADED,
          payload: true
        });
      });
  });
  it(`Should make a correct API call to /favorite/:id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerUpdated = updateOffer("1", true);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/1/1`)
      .reply(200, offers.server[0]);

    return offerUpdated(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER,
          payload: offers.adapted[0],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_OFFERS,
          payload: offers.adapted[0],
        });
      });
  });
  it(`Should make a correct API call to /favorite/:id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const nearbyOffersUpdated = updateNearbyOffers(1, true);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/1/1`)
      .reply(200, offers.server[0]);

    return nearbyOffersUpdated(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_NEARBY_OFFERS,
          payload: offers.adapted[0],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_OFFERS,
          payload: offers.adapted[0],
        });
      });
  });
  it(`Should make a correct API call to /favorite/:id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const comment: CommentPost = {comment: `test`, rating: "2"};
    const commentsUpdated = updateComments(comment, "1");

    apiMock
      .onPost(`${APIRoute.COMMENTS}/1`)
      .reply(200, reviews.server);

    return commentsUpdated(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_DISABLED,
          payload: true,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_REVIEWS,
          payload: reviews.adapted,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_DISABLED,
          payload: false,
        });
      });
  });
});
