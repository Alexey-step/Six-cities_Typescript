import * as React from "react";
import {render, screen} from "@testing-library/react";
import PrivateRoute from "./private-route";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router, Route} from "react-router-dom";
import {createMemoryHistory} from "history";
import {authInfo} from "../../mocks/tests-mocks";

const mockStore = configureStore([]);
let history;
describe(`Test PrivateRoute component`, () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(`/private`);
  });
  it(`Should be render component for public route, when user not authorized`, () => {
    const store = mockStore({
      USER: {authInfo: null}
    });
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Route exact path="/login"><h1>Public Route</h1></Route>
            <PrivateRoute
              exact
              path="/private"
              render={() => (<h1>Private Route</h1>)}
            />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });
  it(`Should be render component for private route, when user authorized`, () => {
    const store = mockStore({
      USER: {authInfo: authInfo.adapted}
    });
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Route exact path="/login"><h1>Public Route</h1></Route>
            <PrivateRoute
              exact
              path="/private"
              render={() => (<h1>Private Route</h1>)}
            />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
