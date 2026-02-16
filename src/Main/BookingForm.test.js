import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders static text in BookingForm', () => {
  render(
    <BookingForm
      date=""
      time="17:00"
      guests="1"
      occasion="Birthday"
      availableTimes={['17:00', '18:00']}
      onDateChange={() => {}}
      onTimeChange={() => {}}
      onGuestsChange={() => {}}
      onOccasionChange={() => {}}
      onSubmit={() => {}}
    />
  );

  const staticText = screen.getByText('Choose date');
  expect(staticText).toBeInTheDocument();
});
