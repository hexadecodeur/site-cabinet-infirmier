import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

test('renders cabinet name', () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  const titleElement = screen.getByRole('link', { name: /Cabinet Infirmier/i });
  expect(titleElement).toBeInTheDocument();
});
