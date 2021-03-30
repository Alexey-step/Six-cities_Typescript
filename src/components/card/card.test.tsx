import * as React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import Card from "./card";
import {offers, authInfo} from "../../mocks/tests-mocks";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import userEvent from "@testing-library/user-event";

const mockStore = configureStore([]);
describe(`Test Card component`, () => {
  jest.spyOn(redux, `useSelector`);
  it(`Should Card render correctly`, () => {
    const type = `CITIES`;
    const store = mockStore({
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();
    render(
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
    expect(screen.getByText(/Premium/!)).toBeInTheDocument();
    expect(screen.getByText(/To bookmarks/!)).toBeInTheDocument();
    expect(screen.getByText(/Rating/!)).toBeInTheDocument();
  });
  it(`Card component should call callback when user click on favorite`, () => {
    const type = `CITIES`;
    const onFavoriteClick = jest.fn();
    const store = mockStore({
      USER: {authInfo: authInfo.adapted}
    });
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Card
              cardType={type}
              offer={offers.adapted[0]}
              onChangeActiveCard={jest.fn()}
              onScrollToTop={jest.fn()}
              onFavoriteClick={onFavoriteClick}
            />
          </Router>
        </redux.Provider>
    );

    userEvent.click(screen.getByRole(`button`));
    expect(onFavoriteClick).toBeCalled();
  });
  it(`Card component should call callback when user hover the mouse on card`, () => {
    const type = `CITIES`;
    const onChangeActiveCard = jest.fn();
    const store = mockStore({
      USER: {authInfo: authInfo.adapted}
    });
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Card
              cardType={type}
              offer={offers.adapted[0]}
              onChangeActiveCard={onChangeActiveCard}
              onScrollToTop={jest.fn()}
              onFavoriteClick={jest.fn()}
            />
          </Router>
        </redux.Provider>
    );

    fireEvent.mouseOver(screen.getByTestId(`mouse`));
    expect(onChangeActiveCard).toBeCalled();
  });
  it(`Card component should call callback when user click on img`, () => {
    const type = `CITIES`;
    const onScrollToTop = jest.fn();
    const store = mockStore({
      USER: {authInfo: authInfo.adapted}
    });
    const history = createMemoryHistory();

    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <Card
              cardType={type}
              offer={offers.adapted[0]}
              onChangeActiveCard={jest.fn()}
              onScrollToTop={onScrollToTop}
              onFavoriteClick={jest.fn()}
            />
          </Router>
        </redux.Provider>
    );

    userEvent.click(screen.getByTestId(`scroll`));
    expect(onScrollToTop).toBeCalled();
  });
});
