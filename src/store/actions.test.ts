import * as ActionCreator from "./action-creators";
import {ActionType} from "./actions";
import {TEST_DATA} from "../const";
import {cards, favoritesCards, authInfo, offer} from "../mocks/tests-mocks";

describe(`Action creators work correctly`, () => {
  it(`setCity action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_CITY,
      payload: TEST_DATA
    };

    expect(ActionCreator.setCity(TEST_DATA)).toEqual(expectedAction);
  });
  it(`setOption action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_OPTION,
      payload: TEST_DATA
    };

    expect(ActionCreator.setOption(TEST_DATA)).toEqual(expectedAction);
  });
  it(`setAuthorization action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_AUTHORIZATION,
      payload: authInfo.adapted
    };

    expect(ActionCreator.setAuthorization(authInfo.adapted)).toEqual(expectedAction);
  });
  it(`setOffers action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_OFFERS,
      payload: []
    };

    expect(ActionCreator.setOffers([])).toEqual(expectedAction);
  });
  it(`setNearbyOffers action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_NEABY_OFFERS,
      payload: []
    };

    expect(ActionCreator.setNearbyOffers([])).toEqual(expectedAction);
  });
  it(`setReviews action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_REVIEWS,
      payload: []
    };

    expect(ActionCreator.setReviews([])).toEqual(expectedAction);
  });
  it(`setFavorite action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_FAVORITES,
      payload: []
    };

    expect(ActionCreator.setFavorite([])).toEqual(expectedAction);
  });
  it(`redirectToRoute action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: TEST_DATA
    };

    expect(ActionCreator.redirectToRoute(TEST_DATA)).toEqual(expectedAction);
  });
  it(`setOffer action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_OFFER,
      payload: {...offer.adapted}
    };

    expect(ActionCreator.setOffer({...offer.adapted})).toEqual(expectedAction);
  });
  it(`setIsLoaded action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_IS_LOADED,
      payload: true
    };

    expect(ActionCreator.setIsLoaded(true)).toEqual(expectedAction);
  });
  it(`setDisabled action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_DISABLED,
      payload: true
    };

    expect(ActionCreator.setDisabled(true)).toEqual(expectedAction);
  });
  it(`setIsError action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_IS_ERROR,
      payload: true
    };

    expect(ActionCreator.setIsError(true)).toEqual(expectedAction);
  });
  it(`updateOffers action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_OFFERS,
      payload: cards.change
    };

    expect(ActionCreator.updateOffers(cards.change)).toEqual(expectedAction);
  });
  it(`updateOffer action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_OFFER,
      payload: cards.change
    };

    expect(ActionCreator.updateOffer(cards.change)).toEqual(expectedAction);
  });
  it(`updateFavorites action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_FAVORITES,
      payload: favoritesCards.remove
    };

    expect(ActionCreator.updateFavorites(favoritesCards.remove)).toEqual(expectedAction);
  });
  it(`updateNearbyOffers action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.UPDATE_NEARBY_OFFERS,
      payload: cards.change
    };

    expect(ActionCreator.updateNearbyOffers(cards.change)).toEqual(expectedAction);
  });
  it(`setIsDataLoaded action creator returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_IS_DATA_LOADED,
      payload: true
    };

    expect(ActionCreator.setIsDataLoaded(true)).toEqual(expectedAction);
  });
});
