import * as React from "react";
import {render, screen} from "@testing-library/react";
import PropertyReviewItem from "./property-review-item";
import {reviews} from "../../mocks/tests-mocks";

describe(`Test PropertyReviewItem component`, () => {
  it(`PropertyReviewItem component should render correctly`, () => {
    render(
        <PropertyReviewItem
          review={reviews.adapted[0]}
        />
    );
    expect(screen.getByTestId(/review/!)).toBeInTheDocument();
    expect(screen.getByText(/Rating/!)).toBeInTheDocument();
  });
});
