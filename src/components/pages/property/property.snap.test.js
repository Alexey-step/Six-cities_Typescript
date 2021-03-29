import React from 'react';
import {render} from '@testing-library/react';
import Property from './property';
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {offers, reviews, authInfo} from '../../../mocks/tests-mocks';

const mockStore = configureStore({});
describe(`Test Property component`, () => {
  const history = createMemoryHistory();
  it(`Property component should render correctly`, () => {
    const store = mockStore({
      PROPERTY: {
        offer: offers.adapted[0],
        reviews: reviews.adapted,
        isLoaded: true,
        nearbyOffers: offers.adapted
      },
      MAIN: {isError: false},
      USER: {authInfo: null}
    });
    store.dispatch = () => {};
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Property />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
  it(`Property component should render correctly when user authorized`, () => {
    const store = mockStore({
      PROPERTY: {
        offer: offers.adapted[0],
        reviews: reviews.adapted,
        isLoaded: true,
        nearbyOffers: offers.adapted
      },
      MAIN: {isError: false},
      USER: {authInfo: authInfo.adapted}
    });
    store.dispatch = () => {};
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Property />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
