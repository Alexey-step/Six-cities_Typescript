import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import LocationItems from './location-items';

const mockStore = configureStore({});

describe(`Test LocationItem component`, () => {
  jest.spyOn(redux, `useSelector`);
  it(`LocationItem component should render correctly`, () => {
    const store = mockStore({
      MAIN: {activeLocation: `Paris`}
    });
    const city = `Paris`;
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <LocationItems city={city} />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
  });
});
