import React from "react";
import createSerializer from "jest-fela-react";
import { createRenderer } from "fela";
import { Provider, createComponent } from "react-fela";
import monolithic from "fela-monolithic";
import renderer from "react-test-renderer";

const felaRenderer = createRenderer();

expect.addSnapshotSerializer(createSerializer(felaRenderer));

test("test 1", () => {
  const Test = createComponent(() => ({ fontSize: '16px', color: "red" }));
  const tree = renderer
    .create(<Provider renderer={felaRenderer}>
        <Test>Test</Test>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
