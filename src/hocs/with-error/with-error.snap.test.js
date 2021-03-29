import React from 'react';
import {render} from '@testing-library/react';
import withError from './with-error';
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import MainPage from "../../components/pages/main-page/main-page";

const mockStore = configureStore({});
describe(`Test HOC withError`, () => {
  const history = createMemoryHistory();
  it(`Base component should be correct rendering another component when use with HOC`, () => {
    const BaseComponentWrapped = withError(MainPage);
    const store = mockStore({
      MAIN: {
        isError: true,
        offers: [],
        isDataLoaded: true,
      },
      USER: {authInfo: null}
    });
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <BaseComponentWrapped />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
