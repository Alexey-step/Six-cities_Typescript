import * as React from 'react';
import {render, screen} from '@testing-library/react';
import PropertyReviews from './property-reviews';
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {reviews, authInfo} from "../../mocks/tests-mocks";

const mockStore = configureStore([]);
describe(`Test PropertyReviews component`, () => {
  it(`PropertyReviews component should render correctly`, () => {
    const store = mockStore({
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <PropertyReviews
              reviews={reviews.adapted}
            />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Reviews/!)).toBeInTheDocument();
  });
  it(`PropertyReviews component should render correctly when user authorized`, () => {
    const store = mockStore({
      USER: {authInfo: authInfo.adapted},
      MAIN: {isError: false},
      PROPERTY: {isDisabled: false},
    });
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <PropertyReviews
              reviews={reviews.adapted}
            />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Your review/!)).toBeInTheDocument();
  });
});
