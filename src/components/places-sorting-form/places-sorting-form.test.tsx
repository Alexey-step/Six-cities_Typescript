import * as React from "react";
import {render, screen} from "@testing-library/react";
import PlacesSortingForm from "./places-sorting-form";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {Options} from "../../const";

const mockStore = configureStore([]);
describe(`Test PlacesSortingForm component`, () => {
  it(`PlacesSortingForm component should render correctly`, () => {
    const store = mockStore({
      MAIN: {option: Options.POPULAR}
    });
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <PlacesSortingForm />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Sort by/!)).toBeInTheDocument();
  });
});
