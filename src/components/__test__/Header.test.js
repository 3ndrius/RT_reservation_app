import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('header renders correctly', () => {
  const { getByTestId } = render(<Header />);
  const headerEl = screen.getByTestId('header');
  expect(headerEl).toBeInTheDocument();
});