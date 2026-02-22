import { render, screen, within } from '@testing-library/react';
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

test('applies aria-label attribute', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('button', { name: 'On Click' })).toBeInTheDocument();
});

test('renders semantic doormat navigation landmark', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('navigation', { name: /doormat navigation/i })).toBeInTheDocument();
});

test('home nav link is active on homepage', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  const [header] = screen.getAllByRole('banner');
  expect(within(header).getByRole('link', { name: /^home$/i })).toHaveClass('active');
});

test('reservations nav link is active on booking page', () => {
  render(
    <MemoryRouter initialEntries={['/booking']}>
      <App />
    </MemoryRouter>
  );

  const [header] = screen.getAllByRole('banner');
  expect(within(header).getByRole('link', { name: /^reservations$/i })).toHaveClass('active');
});
