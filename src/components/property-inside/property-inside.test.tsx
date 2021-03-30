import * as React from "react";
import {render, screen} from "@testing-library/react";
import PropertyInside from "./property-inside";
import {offers} from "../../mocks/tests-mocks";

describe(`Test PropertyInside component`, () => {
  it(`PropertyInside component should render correctly`, () => {
    const {goods} = offers.adapted[0];
    render(
        <PropertyInside
          goods={goods}
        />
    );
    expect(screen.getByText(/What's inside/!)).toBeInTheDocument();
    expect(screen.getByText(/Air conditioning/!)).toBeInTheDocument();
  });
});
