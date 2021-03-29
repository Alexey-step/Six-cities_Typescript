import React from 'react';
import {render} from '@testing-library/react';
import Favorites from './favorites';
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {offers, authInfo} from '../../mocks/tests-mocks';

const mockStore = configureStore({});
describe(`Test Favorites component`, () => {
  it(`Favorites component should render correctly`, () => {
    const store = mockStore({
      FAVORITE: {
        favorites: offers.adapted
      },
      USER: {authInfo: authInfo.adapted}
    });
    const history = createMemoryHistory();
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Favorites />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
