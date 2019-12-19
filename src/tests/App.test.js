import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders budget mtg in nav', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/budget alternates/i);
  expect(linkElement).toBeInTheDocument();
});
