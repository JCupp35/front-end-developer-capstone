import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders reserve a table call to action', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const ctaButton = screen.getByRole('button', { name: /reserve a table/i });
  expect(ctaButton).toBeInTheDocument();
});
