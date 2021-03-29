import * as React from 'react';
import {render, screen} from '@testing-library/react';
import withError from './with-error';
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

const mockStore = configureStore({});
describe(`Test HOC withError`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);
  const history = createMemoryHistory();
  it(`Base component should be correct rendering when use with HOC`, () => {
    const BaseComponent = () => <h1>withError</h1>;
    const BaseComponentWrapped = withError(BaseComponent);
    const store = mockStore({
      MAIN: {isError: true}
    });
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <BaseComponentWrapped />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/withError/i)).toBeInTheDocument();
  });
});
