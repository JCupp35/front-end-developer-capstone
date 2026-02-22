import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

const renderBookingForm = () =>
  render(
    <BookingForm
      date=""
      time=""
      guests="1"
      occasion=""
      availableTimes={['17:00', '18:00']}
      onDateChange={() => {}}
      onTimeChange={() => {}}
      onGuestsChange={() => {}}
      onOccasionChange={() => {}}
      onSubmit={() => {}}
      isFormValid={false}
    />
  );

test('renders static text in BookingForm', () => {
  renderBookingForm();

  const staticText = screen.getByText('Choose date');
  expect(staticText).toBeInTheDocument();
});

test('applies required validation attributes to all form fields', () => {
  renderBookingForm();

  [
    /choose date/i,
    /choose time/i,
    /number of guests/i,
    /occasion/i,
  ].forEach((label) => {
    expect(screen.getByLabelText(label)).toBeRequired();
  });
});

test('applies date input type attribute', () => {
  renderBookingForm();

  expect(screen.getByLabelText(/choose date/i)).toHaveAttribute('type', 'date');
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

  expect(screen.getByText('Choose date')).toHaveAttribute('for', 'res-date');
  expect(screen.getByText('Choose time')).toHaveAttribute('for', 'res-time');
  expect(screen.getByText('Number of guests')).toHaveAttribute('for', 'guests');
  expect(screen.getByText('Occasion')).toHaveAttribute('for', 'occasion');
});
