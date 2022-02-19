import React from "react";
import { Chip } from "..";
import { render } from "@testing-library/react";

describe("Header", () => {
  it("renders Chip correctly", () => {
    const { getByTestId } = render(<Chip>Mock Data</Chip>)
    // Assertion
    expect(getByTestId("rc-chip")).toHaveTextContent("Mock Data")
  })
})