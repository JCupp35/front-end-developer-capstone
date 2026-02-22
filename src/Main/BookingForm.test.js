import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

const renderBookingForm = () =>
  render(
    <BookingForm
      name=""
      phone=""
      date=""
      time=""
      guests="1"
      occasion=""
      availableTimes={['17:00', '18:00']}
      onNameChange={() => {}}
      onPhoneChange={() => {}}
      onNameBlur={() => {}}
      onPhoneBlur={() => {}}
      onDateChange={() => {}}
      onDateBlur={() => {}}
      onTimeChange={() => {}}
      onTimeBlur={() => {}}
      onGuestsChange={() => {}}
      onGuestsBlur={() => {}}
      onOccasionChange={() => {}}
      onOccasionBlur={() => {}}
      onSubmit={() => {}}
      isFormValid={false}
      errors={{}}
    />
  );

test('renders static text in BookingForm', () => {
  renderBookingForm();

  const staticText = screen.getByText('Date to come');
  expect(staticText).toBeInTheDocument();
});

test('applies required validation attributes to all form fields', () => {
  renderBookingForm();

  [
    /full name/i,
    /phone number/i,
    /date to come/i,
    /time to come/i,
    /number of guests/i,
  ].forEach((label) => {
    expect(screen.getByLabelText(label)).toBeRequired();
  });
});

test('occasion field is optional', () => {
  renderBookingForm();

  expect(screen.getByLabelText(/occasion/i)).not.toBeRequired();
});

test('applies date input type attribute', () => {
  renderBookingForm();

  expect(screen.getByLabelText(/date to come/i)).toHaveAttribute('type', 'date');
});

test('applies phone input type attribute', () => {
  renderBookingForm();

  expect(screen.getByLabelText(/phone number/i)).toHaveAttribute('type', 'tel');
});

test('formats time options in user-friendly format', () => {
  renderBookingForm();

  expect(screen.getByRole('option', { name: '5:00 PM' })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: '6:00 PM' })).toBeInTheDocument();
});

test('applies number input constraints for guests', () => {
  renderBookingForm();

  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});

test('maps each label to its form control id via htmlFor', () => {
  renderBookingForm();

  expect(screen.getByLabelText(/date to come/i)).toHaveAttribute('id', 'res-date');
  expect(screen.getByLabelText(/full name/i)).toHaveAttribute('id', 'full-name');
  expect(screen.getByLabelText(/phone number/i)).toHaveAttribute('id', 'phone-number');
  expect(screen.getByLabelText(/time to come/i)).toHaveAttribute('id', 'res-time');
  expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute('id', 'guests');
  expect(screen.getByLabelText(/occasion/i)).toHaveAttribute('id', 'occasion');
});
