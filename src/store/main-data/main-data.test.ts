import {mainData, initialState} from "./main-data";
import * as ActionCreator from "../action-creators";
import {ActionType} from "../actions";
import MockAdapter from "axios-mock-adapter";
import {fetchOffersList, updateOffers} from "../api/api-actions";
import {APIRoute} from "../../const";
import {cards, offers, TEST_DATA} from "../../mocks/tests-mocks";
import {createAPI} from "../api/api";

export const api = createAPI(() => {});

describe(`Reducer work correctly`, () => {
  it(`Reducer should update offers by load offers`, () => {
    expect(mainData(initialState, ActionCreator.setOffers(offers.adapted)))
      .toEqual({
        ...initialState,
        offers: offers.adapted,
        isDataLoaded: true
      });
  });
  it(`Reducer should change activeLocation by setCity action creator given value`, () => {
    expect(mainData(initialState, ActionCreator.setCity(TEST_DATA)))
      .toEqual({
        ...initialState,
        activeLocation: TEST_DATA
      });
  });
  it(`Reducer should change option by setOption action creator given value`, () => {
    expect(mainData(initialState, ActionCreator.setOption(TEST_DATA)))
      .toEqual({
        ...initialState,
        option: TEST_DATA
      });
  });
  it(`Reducer should change isError by setIsError action creator given value`, () => {
    expect(mainData(initialState, ActionCreator.setIsError(true)))
      .toEqual({
        ...initialState,
        isError: true
      });
  });
  it(`Reducer should change isDataLoaded by setIsDataLoaded action creator given value`, () => {
    expect(mainData(initialState, ActionCreator.setIsDataLoaded(true)))
      .toEqual({
        ...initialState,
        isDataLoaded: true
      });
  });
  it(`Reducer should change offers with updateOffers action creator`, () => {
    const state: any = {
      offers: cards.start
    };
    const expectedState = {
      offers: cards.end
    };
    expect(mainData(state, ActionCreator.updateOffers(cards.change)))
      .toEqual(expectedState);
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, offers.server);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFERS,
          payload: offers.adapted,
        });
      });
  });
  it(`Should make a correct API call to /favorite/:id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersUpdated = updateOffers(1, true);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/1/1`)
      .reply(200, offers.server[0]);

    return offersUpdated(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFERS,
          payload: offers.adapted[0],
        });
      });
  });
});
