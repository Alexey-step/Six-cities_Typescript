import {favoriteData, initialState} from "./favorite-data";
import {ActionType} from "../actions";
import * as ActionCreator from "../action-creators";
import MockAdapter from "axios-mock-adapter";
import {fetchFavorites, updateFavorites} from "../api/api-actions";
import {APIRoute} from "../../const";
import {offers, favoritesCards} from "../../mocks/tests-mocks";
import {createAPI} from "../api/api";

export const api = createAPI(() => {});


describe(`Reducer 'favoriteData' should work correctly`, () => {
  it(`Reducer should update favorites by load favorites`, () => {
    expect(favoriteData(initialState, ActionCreator.setFavorite(offers.adapted)))
      .toEqual({
        favorites: offers.adapted
      });
  });
  it(`Reducer should change favorites with updateFavorites action creator`, () => {
    const state = {
      favorites: favoritesCards.start
    };
    const expectedState = {
      favorites: favoritesCards.end
    };
    expect(favoriteData(state, ActionCreator.updateFavorites(favoritesCards.remove)))
      .toEqual(expectedState);
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = fetchFavorites();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, offers.server);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FAVORITES,
          payload: offers.adapted
        });
      });
  });
  it(`Should make a correct API call to /favorite/:id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesUpdated = updateFavorites(1, true);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/1/1`)
      .reply(200, offers.server[0]);

    return favoritesUpdated(dispatch, () => {}, api)
      .then(() => {

        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_FAVORITES,
          payload: offers.adapted[0],
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPDATE_OFFERS,
          payload: offers.adapted[0],
        });
      });
  });
});
