import React from 'react';
import {render} from '@testing-library/react';
import MainPage from './main-page';
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {offers, authInfo} from '../../../mocks/tests-mocks';

const mockStore = configureStore({});
describe(`Test MainPage component`, () => {
  const history = createMemoryHistory();
  it(`MainPage component should render correctly`, () => {
    const store = mockStore({
      MAIN: {
        isError: false,
        isDataLoaded: true,
        offers: offers.adapted
      },
      USER: {authInfo: null}
    });
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MainPage />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
  it(`MainPage component should render correctly when user authorized`, () => {
    const store = mockStore({
      MAIN: {
        isError: false,
        isDataLoaded: true,
        offers: offers.adapted
      },
      USER: {authInfo: authInfo.adapted}
    });
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MainPage />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
  it(`MainPage component should render correctly when isDataLoaded false`, () => {
    const store = mockStore({
      MAIN: {
        isError: false,
        isDataLoaded: false,
        offers: offers.adapted
      }
    });
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MainPage />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
  it(`MainPage component should render correctly when offers empty`, () => {
    const store = mockStore({
      MAIN: {
        isError: false,
        isDataLoaded: true,
        offers: []
      },
      USER: {authInfo: authInfo.adapted}
    });
    store.dispatch = () => {};
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <MainPage />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
