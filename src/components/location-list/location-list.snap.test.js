import React from 'react';
import {render} from '@testing-library/react';
import LocationList from './location-list';
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

const mockStore = configureStore({});
describe(`Test LocationList component`, () => {
  jest.spyOn(redux, `useSelector`);
  it(`LocationList component should render correctly`, () => {
    const store = mockStore({
      MAIN: {activeLocation: `Paris`}
    });
    const history = createMemoryHistory();
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <LocationList />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
