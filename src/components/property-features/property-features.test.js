import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import PropertyFeatures from './property-features';

const mockStore = configureStore({});

describe(`Test PropertyFeatures component`, () => {
  it(`PropertyFeatures component should render correctly`, () => {
    const type = `house`;
    const bedrooms = 2;
    const maxAdults = 3;
    const history = createMemoryHistory();

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <PropertyFeatures
              type={type}
              bedrooms={bedrooms}
              maxAdults={maxAdults}
            />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/house/i)).toBeInTheDocument();
    expect(screen.getByText(/2 Bedrooms/i)).toBeInTheDocument();
    expect(screen.getByText(/Max 3 adults/i)).toBeInTheDocument();
  });
});
