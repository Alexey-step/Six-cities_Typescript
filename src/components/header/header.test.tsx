import * as React from "react";
import {render, screen} from "@testing-library/react";
import Header from "./header";
import {authInfo} from "../../mocks/tests-mocks";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

const mockStore = configureStore([]);
describe(`Test Header component`, () => {
  it(`Header component should render correctly`, () => {
    const store = mockStore({
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Header />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Sign In/!)).toBeInTheDocument();
  });
  it(`Header component should render correctly when user authorized`, () => {
    const store = mockStore({
      USER: {authInfo: authInfo.adapted}
    });
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Header />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/mail@gmail.com/!)).toBeInTheDocument();
  });
});
