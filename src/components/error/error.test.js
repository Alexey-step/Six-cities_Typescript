import React from "react";
import {render, screen} from "@testing-library/react";
import Error from "./error";

it(`Error should render correctly`, () => {
  render(
      <Error />
  );
  expect(screen.getByText(`Что то пошло не так!`)).toBeInTheDocument();
});
