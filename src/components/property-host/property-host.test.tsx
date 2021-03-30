import * as React from "react";
import {render, screen} from "@testing-library/react";
import PropertyHost from "./property-host";
import {offers} from "../../mocks/tests-mocks";

describe(`Test PropertyHost component`, () => {
  it(`PropertyHost component should render correctly`, () => {
    const {host} = offers.adapted[0];
    const {description} = offers.adapted[0];
    render(
        <PropertyHost
          host={host}
          description={description}
        />
    );
    expect(screen.getByText(/Meet the host/!)).toBeInTheDocument();
    expect(screen.getByText(/Angelina/!)).toBeInTheDocument();
  });
});
