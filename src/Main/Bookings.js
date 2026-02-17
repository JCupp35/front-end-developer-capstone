function Bookings({ bookingData, bookings, availableTimes }) {
  return (
    <section>
      <h2>Bookings</h2>
      <p>Selected date: {bookingData.date || 'Not selected'}</p>
      <p>Selected time: {bookingData.time}</p>
      <p>Guests: {bookingData.guests}</p>
      <p>Occasion: {bookingData.occasion}</p>
      <h3>Existing bookings</h3>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={`${booking.date}-${booking.time}-${index}`}>
              {booking.date} - {booking.time} - {booking.guests} guests - {booking.occasion}
            </li>
          ))}
        </ul>
      )}
      <p aria-live="polite">Available times: {availableTimes.join(', ')}</p>
    </section>
  );
}

export default Bookings;
