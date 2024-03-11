import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

test("renders title correctly", () => {
  const { getByText } = render(<PropertyCard title="Beautiful House" />);
  expect(getByText("Beautiful House")).toBeInTheDocument();
});

test("renders type correctly", () => {
  const { getByText } = render(<PropertyCard type="Flat" />);
  expect(getByText("Flat")).toBeInTheDocument();
});

test("renders bathrooms correctly", () => {
  const { getByText } = render(<PropertyCard bathrooms={2} />);
  expect(getByText("2 Bathrooms")).toBeInTheDocument();
});

test("renders bedrooms correctly", () => {
  const { getByText } = render(<PropertyCard bedrooms={3} />);
  expect(getByText("3 Bedrooms")).toBeInTheDocument();
});

test("renders price correctly", () => {
  const { getByText } = render(<PropertyCard price="2000" />);
  expect(getByText("2000")).toBeInTheDocument();
});

test("renders city correctly", () => {
  const { getByText } = render(<PropertyCard city="Manchester" />);
  expect(getByText("Manchester")).toBeInTheDocument();
});

test("renders email correctly", () => {
  const { getByText } = render(<PropertyCard email="test@example.com" />);
  expect(getByText("Email: test@example.com")).toBeInTheDocument();
});