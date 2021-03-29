import React from 'react';
import {render} from '@testing-library/react';
import Cities from './cities';
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {offers} from '../../mocks/tests-mocks';

const mockStore = configureStore({});
describe(`Test Cities component`, () => {
  jest.spyOn(redux, `useSelector`);
  it(`Should Cities render correctly`, () => {
    const store = mockStore({
      MAIN: {
        activeLocation: `Paris`,
        offers: offers.adapted
      },
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Cities />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
