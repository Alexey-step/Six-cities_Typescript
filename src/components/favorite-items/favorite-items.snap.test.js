import React from 'react';
import {render} from '@testing-library/react';
import FavoriteItems from './favorite-items';
import {offers} from "../../mocks/tests-mocks";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

const mockStore = configureStore({});
describe(`Test FavoriteItems component`, () => {
  it(`Should FavoriteItems render correctly`, () => {
    const type = `CITIES`;
    const city = `Paris`;
    const store = mockStore({
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();
    const {container} = render(
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
    expect(container).toMatchSnapshot();
  });
});
