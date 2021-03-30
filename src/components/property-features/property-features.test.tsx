import * as React from "react";
import {render, screen} from "@testing-library/react";
import PropertyFeatures from "./property-features";


describe(`Test PropertyFeatures component`, () => {
  it(`PropertyFeatures component should render correctly`, () => {
    const type = `house`;
    const bedrooms = 2;
    const maxAdults = 3;

    render(
            <PropertyFeatures
              type={type}
              bedrooms={bedrooms}
              maxAdults={maxAdults}
            />
    );

    expect(screen.getByText(/house/i)).toBeInTheDocument();
    expect(screen.getByText(/2 Bedrooms/i)).toBeInTheDocument();
    expect(screen.getByText(/Max 3 adults/i)).toBeInTheDocument();
  });
});
