import React from 'react';
import {render} from '@testing-library/react';
import PlacesOptionsList from './places-options-list';

describe(`Test PlacesOptionsList component`, () => {
  it(`PlacesOptionsList component should render correctly`, () => {
    const activeOption = `Popular`;
    const {container} = render(
        <PlacesOptionsList
          activeOption={activeOption}
          onChangeOption={jest.fn()}
        />
    );
    expect(container).toMatchSnapshot();
  });
});
