import React from 'react';
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

interface TestWrapProps {
  children: React.ReactNode,
}
const TestWrap: React.FC<TestWrapProps> = ({
  children
}) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}

export default TestWrap;
