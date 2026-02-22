function formatTimeLabel(timeValue) {
  const [hourText = '', minuteText = ''] = timeValue.split(':');
  const hour = Number(hourText);
  const minute = Number(minuteText);

  if (Number.isNaN(hour) || Number.isNaN(minute)) {
    return timeValue;
  }

  return new Date(2000, 0, 1, hour, minute).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });
}

function BookingForm({
  name,
  phone,
  date,
  time,
  guests,
  occasion,
  availableTimes,
  isFormValid,
  errors = {},
  onNameChange,
  onPhoneChange,
  onNameBlur,
  onPhoneBlur,
  onDateChange,
  onDateBlur,
  onTimeChange,
  onTimeBlur,
  onGuestsChange,
  onGuestsBlur,
  onOccasionChange,
  onOccasionBlur,
  onSubmit,
}) {

  return (
    <form className="booking-form" onSubmit={onSubmit}>
      <div className="booking-form__field">
        <label htmlFor="full-name">
          Full name <span className="booking-form__required" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="full-name"
          placeholder="Your full name"
          value={name}
          onChange={onNameChange}
          onBlur={onNameBlur}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'full-name-error' : undefined}
          required
        />
        {errors.name && (
          <p id="full-name-error" className="booking-form__error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="phone-number">
          Phone number <span className="booking-form__required" aria-hidden="true">*</span>
        </label>
        <input
          type="tel"
          id="phone-number"
          placeholder="Enter your phone number"
          value={phone}
          onChange={onPhoneChange}
          onBlur={onPhoneBlur}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'phone-number-error' : undefined}
          required
        />
        {errors.phone && (
          <p id="phone-number-error" className="booking-form__error">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="res-date">
          Date to come <span className="booking-form__required" aria-hidden="true">*</span>
        </label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={onDateChange}
          onBlur={onDateBlur}
          aria-invalid={Boolean(errors.date)}
          aria-describedby={errors.date ? 'res-date-error' : undefined}
          required
        />
        {errors.date && (
          <p id="res-date-error" className="booking-form__error">
            {errors.date}
          </p>
        )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="res-time">
          Time to come <span className="booking-form__required" aria-hidden="true">*</span>
        </label>
        <select
          id="res-time"
          value={time}
          onChange={onTimeChange}
          onBlur={onTimeBlur}
          aria-invalid={Boolean(errors.time)}
          aria-describedby={errors.time ? 'res-time-error' : undefined}
          required
        >
          <option value="">Select time</option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {formatTimeLabel(availableTime)}
            </option>
          ))}
        </select>
        {errors.time && (
          <p id="res-time-error" className="booking-form__error">
            {errors.time}
          </p>
        )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="guests">
          Number of guests <span className="booking-form__required" aria-hidden="true">*</span>
        </label>
        <input
          type="number"
          placeholder="How many guests will attend"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={onGuestsChange}
          onBlur={onGuestsBlur}
          aria-invalid={Boolean(errors.guests)}
          aria-describedby={errors.guests ? 'guests-error' : undefined}
          required
        />
        {errors.guests && (
          <p id="guests-error" className="booking-form__error">
            {errors.guests}
          </p>
        )}
      </div>

      <div className="booking-form__field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={onOccasionChange}
          onBlur={onOccasionBlur}
          aria-invalid={Boolean(errors.occasion)}
          aria-describedby={errors.occasion ? 'occasion-error' : undefined}
        >
          <option value="">Select occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {errors.occasion && (
          <p id="occasion-error" className="booking-form__error">
            {errors.occasion}
          </p>
        )}
      </div>

      <input className="booking-form__submit" type="submit" value="Continue" disabled={!isFormValid} />
    </form>
  );
}

export default BookingForm;
