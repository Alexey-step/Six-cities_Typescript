import React from 'react';
import {render} from '@testing-library/react';
import PropertyForm from './property-form';
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

const mockStore = configureStore({});
describe(`Test PropertyForm component`, () => {
  const history = createMemoryHistory();
  it(`PropertyForm component should render correctly`, () => {
    const store = mockStore({
      PROPERTY: {
        isLoaded: true,
      },
      MAIN: {isError: false},
    });
    store.dispatch = () => {};
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <PropertyForm />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
