import React from 'react';
import {render} from '@testing-library/react';
import PropertyInside from './property-inside';
import {offers} from "../../mocks/tests-mocks";

describe(`Test PropertyInside component`, () => {
  it(`PropertyInside component should render correctly`, () => {
    const {goods} = offers.adapted[0];
    const {container} = render(
        <PropertyInside
          goods={goods}
        />
    );
    expect(container).toMatchSnapshot();
  });
});
