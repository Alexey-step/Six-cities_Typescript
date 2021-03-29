import React from 'react';
import {render} from '@testing-library/react';
import Map from './map';
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {offers} from '../../mocks/tests-mocks';

const mockStore = configureStore({});
describe(`Test Map component`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);
  const history = createMemoryHistory();
  it(`Map component should render correctly at MainPage`, () => {
    const {container} = render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <Map
              activeLocation={offers.adapted[0]}
              offers={offers.adapted}
              activeCard={offers.adapted[0]}
              mapStyle="MAIN"
            />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
  it(`Map component should render correctly at PropertyPage`, () => {
    const {container} = render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <Map
              activeLocation={offers.adapted[0]}
              offers={offers.adapted}
              activeCard={offers.adapted[0]}
              mapStyle="PROPERTY"
            />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
