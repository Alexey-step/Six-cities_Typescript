import * as React from "react";
import {render, screen} from "@testing-library/react";
import FavoriteList from "./favorite-list";
import {offers} from "../../mocks/tests-mocks";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

const mockStore = configureStore([]);
describe(`Test FavoriteList component`, () => {
  it(`Should FavoriteList render correctly`, () => {
    const type = `CITIES`;
    const store = mockStore({
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FavoriteList
              type={type}
              offers={offers.adapted}
            />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Paris/!)).toBeInTheDocument();
    expect(screen.getAllByText(/house/!)).toHaveLength(2);
  });
});
