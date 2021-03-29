import React from 'react';
import {render} from '@testing-library/react';
import PropertyReviewItem from './property-review-item';
import {reviews} from "../../mocks/tests-mocks";

describe(`Test PropertyReviewItem component`, () => {
  it(`PropertyReviewItem component should render correctly`, () => {
    const {container} = render(
        <PropertyReviewItem
          review={reviews.adapted[0]}
        />
    );
    expect(container).toMatchSnapshot();
  });
});
