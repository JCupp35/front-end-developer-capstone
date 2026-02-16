function Bookings({ bookingData, availableTimes }) {
  return (
    <section>
      <h2>Bookings</h2>
      <p>Selected date: {bookingData.date || 'Not selected'}</p>
      <p>Selected time: {bookingData.time}</p>
      <p>Guests: {bookingData.guests}</p>
      <p>Occasion: {bookingData.occasion}</p>
      <p aria-live="polite">Available times: {availableTimes.join(', ')}</p>
    </section>
  );
}

export default Bookings;
