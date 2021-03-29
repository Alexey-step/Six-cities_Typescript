import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Login from './login';

const mockStore = configureStore({});

describe(`Test Login component`, () => {
  it(`Login component should render correctly`, () => {
    const store = mockStore({
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();

    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Login />
          </Router>
        </redux.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
