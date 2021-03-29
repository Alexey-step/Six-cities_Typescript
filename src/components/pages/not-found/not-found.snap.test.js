import React from 'react';
import {render} from '@testing-library/react';
import NotFound from './not-found';
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {authInfo} from "../../../mocks/tests-mocks";

const mockStore = configureStore({});
describe(`Test NotFound component`, () => {
  it(`NotFound component should render correctly`, () => {
    const store = mockStore({
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <NotFound />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
  it(`NotFound component should render correctly when user athorized`, () => {
    const store = mockStore({
      USER: {authInfo: authInfo.adapted}
    });
    const history = createMemoryHistory();
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <NotFound />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
