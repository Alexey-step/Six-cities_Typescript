import * as React from "react";
import {render, screen} from "@testing-library/react";
import CitiesEmpty from "./cities-empty";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

const mockStore = configureStore([]);
describe(`Test CitiesEmpty component`, () => {
  jest.spyOn(redux, `useSelector`);
  it(`Should CitiesEmpty render correctly`, () => {
    const store = mockStore({
      MAIN: {activeLocation: `Paris`}
    });
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <CitiesEmpty/>
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/No places to stay available/!)).toBeInTheDocument();
    expect(screen.getByText(/We could not find any property available at the moment in Paris/!)).toBeInTheDocument();
  });
});
