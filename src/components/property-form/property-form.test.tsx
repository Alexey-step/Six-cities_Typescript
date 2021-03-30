import * as React from "react";
import {render, screen} from "@testing-library/react";
import PropertyForm from "./property-form";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import userEvent from "@testing-library/user-event";

const mockStore = configureStore([]);
describe(`Test PropertyForm component`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);
  const history = createMemoryHistory();
  it(`PropertyForm component should render correctly`, () => {
    const store = mockStore({
      PROPERTY: {
        isLoaded: true,
      },
      MAIN: {isError: false},
    });
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <PropertyForm />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Your review/!)).toBeInTheDocument();
  });
  it(`PropertyForm component star checkbox should render correctly when user checked`, () => {
    const inputValue = 1;
    const store = mockStore({
      PROPERTY: {
        isLoaded: true,
      },
      MAIN: {isError: false},
    });
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <PropertyForm />
          </Router>
        </redux.Provider>
    );
    userEvent.click(screen.getByDisplayValue(inputValue));
    expect(screen.getByDisplayValue(inputValue)).toBeChecked();
  });
});
