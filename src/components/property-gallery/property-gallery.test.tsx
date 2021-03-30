import * as React from "react";
import {render, screen} from "@testing-library/react";
import PropertyGallery from "./property-gallery";
import {offers} from "../../mocks/tests-mocks";

describe(`Test PropertyGallery component`, () => {
  it(`PropertyGallery component should render correctly`, () => {
    const {images} = offers.adapted[0];
    render(
        <PropertyGallery
          images={images}
        />
    );
    expect(screen.getAllByAltText(`Photo studio`)).toHaveLength(2);
  });
});

