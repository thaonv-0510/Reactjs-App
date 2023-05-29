import React from "react";
import '@testing-library/jest-dom'
import Input from "@src/components/atoms/Input/Input";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

const defaultProps = {
  hasError: false,
  errorMessage: "",
}

const makeComponent = (props = {}) => {
  render(
    <BrowserRouter>
      <Input {...defaultProps} {...props} />
    </BrowserRouter>
  )
}

describe("Input", () => {
  it("should render components", () => {
    makeComponent();
    expect(screen.getByTestId("atom-input")).toBeInTheDocument();
  })
})
