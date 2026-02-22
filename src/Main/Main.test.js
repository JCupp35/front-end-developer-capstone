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

const renderBookingRoute = () =>
  render(
    <MemoryRouter initialEntries={['/booking']}>
      <Main />
    </MemoryRouter>
  );

const setFieldValue = (label, value) => {
  fireEvent.change(screen.getByLabelText(label), {
    target: { value },
  });
};

const fillRequiredFields = ({
  name = 'Jim Johnson',
  phone = '(555) 555-5555',
  date = '2026-02-20',
  time = '17:00',
  occasion = 'Birthday',
} = {}) => {
  if (name !== null) {
    setFieldValue(/full name/i, name);
  }
  if (phone !== null) {
    setFieldValue(/phone number/i, phone);
  }
  if (date !== null) {
    setFieldValue(/date to come/i, date);
  }
  if (time !== null) {
    setFieldValue(/time to come/i, time);
  }
  if (occasion !== null) {
    setFieldValue(/occasion/i, occasion);
  }
};

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

  renderBookingRoute();

  expect(screen.queryByRole('heading', { name: /bookings/i })).not.toBeInTheDocument();
});

test('writes new booking to localStorage on successful submit', () => {
  renderBookingRoute();
  fillRequiredFields();
  fireEvent.click(screen.getByDisplayValue('Continue'));
  fireEvent.click(screen.getByRole('button', { name: /confirm booking/i }));

  expect(submitAPI).toHaveBeenCalledWith({
    name: 'Jim Johnson',
    phone: '(555) 555-5555',
    date: '2026-02-20',
    time: '17:00',
    guests: '1',
    occasion: 'Birthday',
  });

  const storedBookings = JSON.parse(localStorage.getItem('bookings'));
  expect(storedBookings).toHaveLength(1);
  expect(storedBookings[0]).toEqual({
    name: 'Jim Johnson',
    phone: '(555) 555-5555',
    date: '2026-02-20',
    time: '17:00',
    guests: '1',
    occasion: 'Birthday',
  });
});

test('submit button is disabled until all required fields are valid', () => {
  renderBookingRoute();

  const submitButton = screen.getByDisplayValue('Continue');
  expect(submitButton).toBeDisabled();

  fillRequiredFields();

  expect(submitButton).toBeEnabled();
});

test('submit remains disabled when full name is missing', () => {
  renderBookingRoute();

  const submitButton = screen.getByDisplayValue('Continue');
  fillRequiredFields({ name: null });

  expect(submitButton).toBeDisabled();
  fireEvent.blur(screen.getByLabelText(/full name/i));
  expect(screen.getByText(/please enter your full name/i)).toBeInTheDocument();
});

test('submit remains disabled when time is missing', () => {
  renderBookingRoute();

  const submitButton = screen.getByDisplayValue('Continue');
  fillRequiredFields({ time: null });

  expect(submitButton).toBeDisabled();
  fireEvent.blur(screen.getByLabelText(/time to come/i));
  expect(screen.getByText(/please select an available time/i)).toBeInTheDocument();
});

test('submit remains disabled when guests are out of range', () => {
  renderBookingRoute();

  const submitButton = screen.getByDisplayValue('Continue');
  fillRequiredFields();
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: '0' },
  });
  expect(submitButton).toBeDisabled();

  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: '11' },
  });
  expect(submitButton).toBeDisabled();
  fireEvent.blur(screen.getByLabelText(/number of guests/i));
  expect(screen.getByText(/please choose between 1 and 10 guests/i)).toBeInTheDocument();
});

test('submit stays enabled when occasion is missing', () => {
  renderBookingRoute();

  const submitButton = screen.getByDisplayValue('Continue');
  fillRequiredFields({ occasion: null });

  expect(submitButton).toBeEnabled();
  fireEvent.blur(screen.getByLabelText(/occasion/i));
  expect(screen.queryByText(/please select an occasion/i)).not.toBeInTheDocument();
});

test('submit remains disabled when phone format is invalid', () => {
  renderBookingRoute();

  const submitButton = screen.getByDisplayValue('Continue');
  fillRequiredFields({ phone: '555-555' });

  expect(submitButton).toBeDisabled();
  fireEvent.blur(screen.getByLabelText(/phone number/i));
  expect(screen.getByText(/please enter a valid 10-digit phone number/i)).toBeInTheDocument();
});

test('continue navigates to review page but does not confirm yet', () => {
  renderBookingRoute();
  fillRequiredFields();
  fireEvent.click(screen.getByDisplayValue('Continue'));

  expect(screen.getByRole('heading', { name: /summary/i })).toBeInTheDocument();
  expect(submitAPI).not.toHaveBeenCalled();
});

test('accepts 10-digit phone and normalizes in summary', () => {
  renderBookingRoute();

  fillRequiredFields({ phone: '5555555555' });
  fireEvent.click(screen.getByDisplayValue('Continue'));

  expect(screen.getByText('(555) 555-5555')).toBeInTheDocument();
});

test('back button on review page returns to booking form with values', () => {
  renderBookingRoute();
  fillRequiredFields();
  fireEvent.click(screen.getByDisplayValue('Continue'));
  fireEvent.click(screen.getByRole('button', { name: /go back to booking form/i }));

  expect(screen.getByLabelText(/full name/i)).toHaveValue('Jim Johnson');
  expect(screen.getByLabelText(/phone number/i)).toHaveValue('(555) 555-5555');
});

test('confirm booking navigates home and shows dismissible banner', () => {
  renderBookingRoute();
  fillRequiredFields();
  fireEvent.click(screen.getByDisplayValue('Continue'));
  fireEvent.click(screen.getByRole('button', { name: /confirm booking/i }));

  expect(screen.getByText(/booking confirmed/i)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /dismiss booking confirmation banner/i }));
  expect(screen.queryByText(/booking confirmed/i)).not.toBeInTheDocument();
});

test('summary includes occasion and formatted time', () => {
  renderBookingRoute();
  fillRequiredFields();
  fireEvent.click(screen.getByDisplayValue('Continue'));

  expect(screen.getByText('Birthday')).toBeInTheDocument();
  expect(screen.getByText('5:00 PM')).toBeInTheDocument();
});
