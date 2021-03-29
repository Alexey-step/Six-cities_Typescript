import React from 'react';
import {render} from '@testing-library/react';
import PropertyHost from './property-host';
import {offers} from "../../mocks/tests-mocks";

describe(`Test PropertyHost component`, () => {
  it(`PropertyHost component should render correctly`, () => {
    const {host} = offers.adapted[0];
    const {description} = offers.adapted[0];
    const {container} = render(
        <PropertyHost
          host={host}
          description={description}
        />
    );
    expect(container).toMatchSnapshot();
  });
});
