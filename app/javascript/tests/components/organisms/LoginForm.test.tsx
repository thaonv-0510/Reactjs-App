import React from 'react';
import LoginForm from '@src/components/organisms/LoginForm';
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import TestWrap from '@tests/TestWrap';

const makeComponent = () => {
  render(
    <TestWrap>
      <LoginForm/>
    </TestWrap>
  )
};

describe('LoginForm', () => {
  it('render components', () => {
    makeComponent();

    expect(screen.getByText('Email address')).toBeInTheDocument();
  })
})
