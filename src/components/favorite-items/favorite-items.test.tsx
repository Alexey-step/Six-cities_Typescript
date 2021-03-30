import * as React from "react";
import {render, screen} from "@testing-library/react";
import FavoriteItems from "./favorite-items";
import {offers} from "../../mocks/tests-mocks";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

const mockStore = configureStore([]);
describe(`Test FavoriteItems component`, () => {
  it(`Should FavoriteItems render correctly`, () => {
    const type = `CITIES`;
    const city = `Paris`;
    const store = mockStore({
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <FavoriteItems
              type={type}
              offers={offers.adapted}
              city={city}
            />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Paris/!)).toBeInTheDocument();
    expect(screen.getAllByText(/house/!)).toHaveLength(2);
  });
});
