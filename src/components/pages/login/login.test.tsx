import * as React from "react";
import {render, screen} from "@testing-library/react";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import configureStore from "redux-mock-store";
import * as redux from "react-redux";
import userEvent from "@testing-library/user-event";
import Login from "./login";

const mockStore = configureStore([]);

describe(`Test Login component`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);
  it(`Login component should render correctly`, () => {
    const store = mockStore({
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Login />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(/Sign in/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(`Email`)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(`Password`)).toBeInTheDocument();

    userEvent.type(screen.getByTestId(`email`), `mail@mail.ru`);
    userEvent.type(screen.getByTestId(`password`), `123456`);

    expect(screen.getByDisplayValue(/mail@mail.ru/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});
