import React from 'react';
import {render} from '@testing-library/react';
import CitiesEmpty from './cities-empty';
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

const mockStore = configureStore({});
describe(`Test CitiesEmpty component`, () => {
  jest.spyOn(redux, `useSelector`);
  it(`Should CitiesEmpty render correctly`, () => {
    const store = mockStore({
      MAIN: {activeLocation: `Paris`}
    });
    const history = createMemoryHistory();
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <CitiesEmpty/>
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
