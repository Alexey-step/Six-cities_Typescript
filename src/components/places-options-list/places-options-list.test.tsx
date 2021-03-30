import * as React from "react";
import {render, screen} from "@testing-library/react";
import PlacesOptionsList from "./places-options-list";

describe(`Test PlacesOptionsList component`, () => {
  it(`PlacesOptionsList component should render correctly`, () => {
    const activeOption = `Popular`;
    render(
        <PlacesOptionsList
          activeOption={activeOption}
          onChangeOption={jest.fn()}
        />
    );
    expect(screen.getByText(/Price: low to high/!)).toBeInTheDocument();
    expect(screen.getByText(/Popular/!)).toBeInTheDocument();
  });
});
