import React from "react";
import renderer from "react-test-renderer";

import Items from "./Items";
import Header from "./Header";

//Demo tests (scotch.io)

it("renders correctly when there are no items", () => {
  const tree = renderer.create(<Items />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is one item", () => {
  const items = ["one"];
  const tree = renderer.create(<Items items={items} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there are multiple items", () => {
  const items = ["one", "two", "three"];
  const tree = renderer.create(<Items items={items} />).toJSON();
  expect(tree).toMatchSnapshot();
});

// My Tests

test("Rendering the header", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Rendering the header inline", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <nav
      style={
        Object {
          "alignContent": "space-around",
          "background": "red",
          "display": "flex",
          "justifyContent": "space-evenly",
          "padding": "20px",
        }
      }
    >
      <a
        href="/"
        style={
          Object {
            "color": "black",
            "textDecoration": "none",
          }
        }
      >
        Home
      </a>
       |
      <a
        href="/about"
        style={
          Object {
            "color": "black",
            "textDecoration": "none",
          }
        }
      >
        About
      </a>
       |
      <a
        href="/other-projects"
        style={
          Object {
            "color": "black",
            "textDecoration": "none",
          }
        }
      >
        Other Projects
      </a>
       |
      <a
        href="/contact"
        style={
          Object {
            "color": "black",
            "textDecoration": "none",
          }
        }
      >
        Contact
      </a>
    </nav>
  `);
});
