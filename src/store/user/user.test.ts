import {user, initialState} from "./user";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../api/api";
import {ActionType} from "../actions";
import {checkAuth, login} from "../api/api-actions";
import {APIRoute, AppRoute} from "../../const";
import * as ActionCreator from "../action-creators";
import {authInfo} from "../../mocks/tests-mocks";

const api = createAPI(() => {});
describe(`Reducer work correctly`, () => {
  it(`Reducer should update authInfo by load authInfo`, () => {
    expect(user(initialState, ActionCreator.setAuthorization(authInfo.adapted)))
       .toEqual({
         authInfo: authInfo.adapted,
         loading: false
       });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
       .onGet(APIRoute.LOGIN)
       .reply(200, authInfo.server);

    return checkAuthLoader(dispatch, () => {}, api)
       .then(() => {
         expect(dispatch).toHaveBeenCalledTimes(1);
         expect(dispatch).toHaveBeenNthCalledWith(1, {
           type: ActionType.SET_AUTHORIZATION,
           payload: authInfo.adapted,
         });
       });
  });
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `mail@gmail.com`, password: `123456`};
    const loginLoader = login(fakeUser);

    apiMock
       .onPost(APIRoute.LOGIN)
       .reply(200, authInfo.server);

    return loginLoader(dispatch, () => {}, api)
       .then(() => {
         expect(dispatch).toHaveBeenCalledTimes(2);

         expect(dispatch).toHaveBeenNthCalledWith(1, {
           type: ActionType.SET_AUTHORIZATION,
           payload: authInfo.adapted,
         });

         expect(dispatch).toHaveBeenNthCalledWith(2, {
           type: ActionType.REDIRECT_TO_ROUTE,
           payload: AppRoute.MAIN,
         });
       });
  });
});
