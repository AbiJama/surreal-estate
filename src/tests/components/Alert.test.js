import React from "react";
import { render } from "@testing-library/react";
import Alert from "../../components/Alert";

test("displays an error message", () => {
  const { getByText } = render(<Alert message="Error!" />);

  expect(getByText(/Error/)).toBeInTheDocument();

  expect(getByText(/Error/).textContent).toBe("Error!");
});

test("displays a success message", () => {
  const { getByText } = render(<Alert message="Success!!!!" success />);

  expect(getByText(/Success/).textContent).toBe("Success!!!!");
});

test("renders correctly with an error message", () => {
  const { asFragment } = render(<Alert message="Error!" />);
  const alert = asFragment();

  expect(alert).toMatchSnapshot();
});

test("renders correctly with a success message", () => {
  const { asFragment } = render(<Alert message="Success!!!!" success />);
  const alert = asFragment();

  expect(alert).toMatchSnapshot();
});

test("does not render an error or a success message if message prop is empty", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();
  
    expect(alert).toMatchSnapshot();
  });
