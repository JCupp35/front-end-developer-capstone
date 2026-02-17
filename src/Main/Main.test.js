import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../utilities';
import Main, { initializeTimes, updateTimes } from './Main';

jest.mock('../utilities', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(() => true),
}));

beforeEach(() => {
  jest.clearAllMocks();
  localStorage.clear();
  fetchAPI.mockReturnValue(['17:00', '17:30', '18:00']);
  submitAPI.mockReturnValue(true);
});

test('initializeTimes returns available times from fetchAPI', () => {
  const mockTimes = ['17:00', '17:30', '18:00'];
  fetchAPI.mockReturnValue(mockTimes);

  expect(initializeTimes()).toEqual(mockTimes);
  expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
});

test('updateTimes returns available times for selected date', () => {
  const state = ['17:00'];
  const selectedDate = '2026-02-15';
  const mockTimes = ['19:00', '19:30'];
  fetchAPI.mockReturnValue(mockTimes);

  expect(
    updateTimes(state, { type: 'date_changed', selectedDate })
  ).toEqual(mockTimes);
  expect(fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
});

test('reads existing bookings from localStorage', () => {
  localStorage.setItem(
    'bookings',
    JSON.stringify([
      {
        date: '2026-02-18',
        time: '18:00',
        guests: '2',
        occasion: 'Birthday',
      },
    ])
  );

  render(
    <MemoryRouter initialEntries={['/booking']}>
      <Main />
    </MemoryRouter>
  );

  expect(
    screen.getByText('2026-02-18 - 18:00 - 2 guests - Birthday')
  ).toBeInTheDocument();
});

test('writes new booking to localStorage on successful submit', () => {
  render(
    <MemoryRouter initialEntries={['/booking']}>
      <Main />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: '2026-02-20' },
  });
  fireEvent.click(screen.getByDisplayValue('Make Your reservation'));

  expect(submitAPI).toHaveBeenCalledWith({
    date: '2026-02-20',
    time: '17:00',
    guests: '1',
    occasion: 'Birthday',
  });

  const storedBookings = JSON.parse(localStorage.getItem('bookings'));
  expect(storedBookings).toHaveLength(1);
  expect(storedBookings[0]).toEqual({
    date: '2026-02-20',
    time: '17:00',
    guests: '1',
    occasion: 'Birthday',
  });
});
