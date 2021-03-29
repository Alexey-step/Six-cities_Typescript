import React from 'react';
import {render} from '@testing-library/react';
import PropertyGallery from './property-gallery';
import {offers} from "../../mocks/tests-mocks";

describe(`Test PropertyGallery component`, () => {
  it(`PropertyGallery component should render correctly`, () => {
    const {images} = offers.adapted[0];
    const {container} = render(
        <PropertyGallery
          images={images}
        />
    );
    expect(container).toMatchSnapshot();
  });
});

