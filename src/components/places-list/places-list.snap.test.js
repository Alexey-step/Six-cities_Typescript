import React from 'react';
import {render} from '@testing-library/react';
import PlacesList from './places-list';
import {offers, authInfo} from "../../mocks/tests-mocks";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

const mockStore = configureStore({});
describe(`Test PlacesList component`, () => {
  it(`PlacesList component should render correctly`, () => {
    const type = `CITIES`;
    const store = mockStore({
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <PlacesList
              type={type}
              offers={offers.adapted}
              onChangeActiveCard={jest.fn()}
              onScrollToTop={jest.fn()}
              onFavoriteClick={jest.fn()}
            />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
  it(`PlacesList component should render correctly when user athorized`, () => {
    const type = `CITIES`;
    const store = mockStore({
      USER: {authInfo: authInfo.adapted}
    });
    const history = createMemoryHistory();
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <PlacesList
              type={type}
              offers={offers.adapted}
              onChangeActiveCard={jest.fn()}
              onScrollToTop={jest.fn()}
              onFavoriteClick={jest.fn()}
            />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
