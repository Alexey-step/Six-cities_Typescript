import React from "react";
import {render, screen} from "@testing-library/react";
import FavoritesEmpty from "./favorites-empty";

describe(`Test FavoritesEmpty component`, () => {
  it(`FavoritesEmpty component should render correctly`, () => {
    render(
        <FavoritesEmpty />
    );
    expect(screen.getByText(`Favorites (empty)`)).toBeInTheDocument();
    expect(screen.getByText(`Nothing yet saved.`)).toBeInTheDocument();
    expect(screen.getByText(`Save properties to narrow down search or plan your future trips.`)).toBeInTheDocument();
  });
});
