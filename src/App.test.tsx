import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app component', () => {
  const { getByTestId } =  render(<App />);
  const mainAppComponent = getByTestId('App');
  expect(mainAppComponent).toBeInTheDocument();
});

