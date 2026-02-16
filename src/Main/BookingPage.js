import { useState } from 'react';
import BookingForm from './BookingForm';
import Bookings from './Bookings';

function BookingPage({ availableTimes, onDateChangeFromMain }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('Birthday');

  const bookingData = {
    date,
    time,
    guests,
    occasion,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
        />
        <Bookings bookingData={bookingData} availableTimes={availableTimes} />
      </div>
    </section>
  );
}

export default BookingPage;
