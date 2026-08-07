import { render, screen } from '@testing-library/react';
import App from './App';

test('renders cabinet name', () => {
  render(<App />);
  const titleElement = screen.getByRole('link', { name: /Cabinet Infirmier/i });
  expect(titleElement).toBeInTheDocument();
});
