import * as React from "react";
import {render, screen} from "@testing-library/react";
import FavoritesPage from "./favorites-page";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {offers, authInfo} from "../../../mocks/tests-mocks";

const mockStore = configureStore([]);
describe(`Test FavoritesPage component`, () => {
  const history = createMemoryHistory();
  it(`FavoritesPage component should render correctly`, () => {
    const store = mockStore({
      MAIN: {isError: false},
      USER: {authInfo: authInfo.adapted},
      FAVORITE: {favorites: offers.adapted}
    });
    store.dispatch = jest.fn();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FavoritesPage />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Saved listing/!)).toBeInTheDocument();
  });
  it(`FavoritesPage component should render correctly when favorites empty`, () => {
    const store = mockStore({
      MAIN: {isError: false},
      USER: {authInfo: authInfo.adapted},
      FAVORITE: {favorites: []}
    });
    store.dispatch = jest.fn();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FavoritesPage />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips./!)).toMatchSnapshot();
  });
});
