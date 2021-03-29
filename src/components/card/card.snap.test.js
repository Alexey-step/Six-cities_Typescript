import React from 'react';
import {render} from '@testing-library/react';
import Card from './card';
import {offers} from "../../mocks/tests-mocks";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

const mockStore = configureStore({});
describe(`Test Card component`, () => {
  jest.spyOn(redux, `useSelector`);
  it(`Should Card render correctly`, () => {
    const type = `CITIES`;
    const store = mockStore({
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Card
              cardType={type}
              offer={offers.adapted[0]}
              onChangeActiveCard={jest.fn()}
              onScrollToTop={jest.fn()}
              onFavoriteClick={jest.fn()}
            />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
