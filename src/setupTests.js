// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "./components/card/card";

const defaultProps = {
  name: "test name",
  image: "https://via.placeholder.com/100",
  desc: "a description",
};

test("card title shows", () => {
  render(<Card name={defaultProps.name} image={defaultProps.image} desc={defaultProps.desc} />);
  const linkElement = screen.getByText(defaultProps.name);
  expect(linkElement).toBeInTheDocument();
});

test("description shows", async () => {
  render(<Card name={defaultProps.name} image={defaultProps.image} desc={defaultProps.desc} />);
  const linkElement = await screen.getByText(defaultProps.desc);
  expect(linkElement).toBeInTheDocument();
});

test("image shows", async () => {
  render(<Card name={defaultProps.name} image={defaultProps.image} desc={defaultProps.desc} />);
  const image = await screen.getByRole("img");
  expect(image).toHaveAttribute("src", defaultProps.image);
});
