function formatDate(date) {
  if (!date) {
    return 'Not selected';
  }

  const parsedDate = new Date(`${date}T00:00:00`);
  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatTime(time) {
  if (!time) {
    return 'Not selected';
  }

  const [hourText = '', minuteText = ''] = time.split(':');
  const hour = Number(hourText);
  const minute = Number(minuteText);

  if (Number.isNaN(hour) || Number.isNaN(minute)) {
    return time;
  }

  return new Date(2000, 0, 1, hour, minute).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });
}

function formatPhone(phone) {
  if (!phone) {
    return 'Not selected';
  }

  const digits = phone.replace(/\D/g, '');
  if (digits.length !== 10) {
    return phone;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function ConfirmedBooking({ bookingData, onBackToBooking, onConfirmBooking }) {
  return (
    <section className="confirmed-booking">
      <div className="container confirmed-booking__container">
        <header className="confirmed-booking__header">
          <button
            type="button"
            aria-label="Go back to booking form"
            className="confirmed-booking__back-button"
            onClick={onBackToBooking}
          >
            ←
          </button>
          <p>Review booking details</p>
          <h1>Summary</h1>
        </header>

        <dl className="confirmed-booking__summary">
          <div>
            <dt>Name</dt>
            <dd>{bookingData.name || 'Not selected'}</dd>
          </div>
          <div>
            <dt>Phone number</dt>
            <dd>{formatPhone(bookingData.phone)}</dd>
          </div>
          <div>
            <dt>Date</dt>
            <dd>{formatDate(bookingData.date)}</dd>
          </div>
          <div>
            <dt>Time</dt>
            <dd>{formatTime(bookingData.time)}</dd>
          </div>
          <div>
            <dt>Number of guests</dt>
            <dd>{bookingData.guests || 'Not selected'}</dd>
          </div>
          <div>
            <dt>Occasion</dt>
            <dd>{bookingData.occasion || 'Not selected'}</dd>
          </div>
        </dl>

        <button
          type="button"
          aria-label="Confirm booking"
          className="confirmed-booking__button"
          onClick={onConfirmBooking}
        >
          Confirm Booking
        </button>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
