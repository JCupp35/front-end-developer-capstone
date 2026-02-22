import { useState } from 'react';
import BookingForm from './BookingForm';
import Bookings from './Bookings';

function BookingPage({ availableTimes, bookings, onDateChangeFromMain, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('');

  const guestsNumber = Number(guests);
  const isDateValid = date !== '';
  const isTimeValid = time !== '' && availableTimes.includes(time);
  const isGuestsValid = guests !== '' && guestsNumber >= 1 && guestsNumber <= 10;
  const isOccasionValid = occasion !== '';
  const isFormValid = isDateValid && isTimeValid && isGuestsValid && isOccasionValid;

  const bookingData = {
    date,
    time,
    guests,
    occasion,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(bookingData);
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    onDateChangeFromMain(selectedDate);
  };

  return (
    <section className="booking-page">
      <div className="container">
        <h1>Reserve a Table</h1>
        <BookingForm
          date={date}
          time={time}
          guests={guests}
          occasion={occasion}
          availableTimes={availableTimes}
          onDateChange={handleDateChange}
          onTimeChange={(event) => setTime(event.target.value)}
          onGuestsChange={(event) => setGuests(event.target.value)}
          onOccasionChange={(event) => setOccasion(event.target.value)}
          onSubmit={handleSubmit}
          isFormValid={isFormValid}
        />
        <Bookings
          bookingData={bookingData}
          bookings={bookings}
          availableTimes={availableTimes}
        />
      </div>
    </section>
  );
}

export default BookingPage;
