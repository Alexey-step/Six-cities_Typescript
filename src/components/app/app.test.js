import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './app';
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {offers, authInfo, reviews} from '../../mocks/tests-mocks';
import {AppRoute} from "../../const";

const mockStore = configureStore({});
describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);
  it(`Render mainPage when user navigate to "/" url`, () => {
    const store = mockStore({
      MAIN: {
        isError: false,
        offers: offers.adapted,
        isDataLoaded: true
      },
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/Cologne/i)).toBeInTheDocument();
    expect(screen.getByText(/Brussels/i)).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getByText(/Hamburg/i)).toBeInTheDocument();
    expect(screen.getByText(/Dusseldorf/i)).toBeInTheDocument();
  });
  it(`Render Login when user navigate to "/login" url`, () => {
    const store = mockStore({
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();
    history.push(`${AppRoute.LOGIN}`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByTestId(/Sign in/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(`Email`)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(`Password`)).toBeInTheDocument();
  });
  it(`Render NotFound when user navigate to "/not-found-page" url`, () => {
    const store = mockStore({
      USER: {authInfo: null},
    });
    const history = createMemoryHistory();
    history.push(`${AppRoute.NOT_FOUND}`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
    expect(screen.getByText(/Вернуться на главную/i)).toBeInTheDocument();
  });
  it(`Render FavoritePage when user navigate to "/favorite" url`, () => {
    const store = mockStore({
      USER: {authInfo: authInfo.adapted},
      MAIN: {isError: false},
      FAVORITE: {favorites: []}
    });
    store.dispatch = () => {};
    const history = createMemoryHistory();
    history.push(`${AppRoute.FAVORITES}`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips./i)).toBeInTheDocument();
  });
  it(`Render Property when user navigate to "/offer/:id" url`, () => {
    const store = mockStore({
      USER: {authInfo: null},
      MAIN: {isError: false},
      PROPERTY: {
        offer: offers.adapted[0],
        nearbyOffers: offers.adapted,
        isLoaded: true,
        reviews: reviews.adapted
      }
    });
    store.dispatch = () => {};
    const history = createMemoryHistory();
    history.push(`${AppRoute.OFFER}/:id`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
  });
});
