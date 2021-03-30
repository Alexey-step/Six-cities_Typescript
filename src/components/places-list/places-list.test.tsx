import * as React from "react";
import {render, screen} from "@testing-library/react";
import PlacesList from "./places-list";
import {offers, authInfo} from "../../mocks/tests-mocks";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

const mockStore = configureStore([]);
describe(`Test PlacesList component`, () => {
  it(`PlacesList component should render correctly`, () => {
    const type = `CITIES`;
    const store = mockStore({
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();
    render(
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
    expect(screen.getAllByText(/Tile House/!)).toHaveLength(2);
    expect(screen.getAllByText(/To bookmarks/!)).toHaveLength(2);
  });
});
