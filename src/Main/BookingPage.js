import { useState } from 'react';
import BookingForm from './BookingForm';

function BookingPage({
  availableTimes,
  bookingData,
  onBookingDataChange,
  onDateChangeFromMain,
  continueToReview,
}) {
  const [touchedFields, setTouchedFields] = useState({});
  const [isSubmitAttempted, setIsSubmitAttempted] = useState(false);
  const { name, phone, date, time, guests, occasion } = bookingData;

  const guestsNumber = Number(guests);
  const phoneDigits = phone.replace(/\D/g, '');
  const isNameValid = name.trim() !== '';
  const isPhoneValid = phoneDigits.length === 10;
  const isDateValid = date !== '';
  const isTimeValid = time !== '' && availableTimes.includes(time);
  const isGuestsValid = guests !== '' && guestsNumber >= 1 && guestsNumber <= 10;

  const fieldErrors = {
    name: isNameValid ? '' : 'Please enter your full name.',
    phone: isPhoneValid ? '' : 'Please enter a valid 10-digit phone number.',
    date: isDateValid ? '' : 'Please select a date.',
    time: isTimeValid ? '' : 'Please select an available time.',
    guests: isGuestsValid ? '' : 'Please choose between 1 and 10 guests.',
  };

  const isFormValid =
    !fieldErrors.name &&
    !fieldErrors.phone &&
    !fieldErrors.date &&
    !fieldErrors.time &&
    !fieldErrors.guests;

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitAttempted(true);
    if (!isFormValid) {
      return;
    }
    continueToReview(bookingData);
  };

  const handleFieldChange = (field, value) => {
    onBookingDataChange((prevBookingData) => ({
      ...prevBookingData,
      [field]: value,
    }));
  };

  const handleFieldBlur = (field) => {
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [field]: true,
    }));
  };

  const getInlineError = (field) => {
    if (!touchedFields[field] && !isSubmitAttempted) {
      return '';
    }
    return fieldErrors[field];
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    handleFieldChange('date', selectedDate);
    onDateChangeFromMain(selectedDate);
  };

  return (
    <section className="booking-page">
      <div className="container booking-page__container">
        <header className="booking-page__header">
          <p>Book a table details</p>
          <h1>Reserve Table</h1>
        </header>
        <div className="booking-page__content">
          <BookingForm
            name={name}
            phone={phone}
            date={date}
            time={time}
            guests={guests}
            occasion={occasion}
            availableTimes={availableTimes}
            onNameChange={(event) => handleFieldChange('name', event.target.value)}
            onPhoneChange={(event) => handleFieldChange('phone', event.target.value)}
            onNameBlur={() => handleFieldBlur('name')}
            onPhoneBlur={() => handleFieldBlur('phone')}
            onDateChange={handleDateChange}
            onDateBlur={() => handleFieldBlur('date')}
            onTimeChange={(event) => handleFieldChange('time', event.target.value)}
            onTimeBlur={() => handleFieldBlur('time')}
            onGuestsChange={(event) => handleFieldChange('guests', event.target.value)}
            onGuestsBlur={() => handleFieldBlur('guests')}
            onOccasionChange={(event) => handleFieldChange('occasion', event.target.value)}
            onOccasionBlur={() => handleFieldBlur('occasion')}
            onSubmit={handleSubmit}
            isFormValid={isFormValid}
            errors={{
              name: getInlineError('name'),
              phone: getInlineError('phone'),
              date: getInlineError('date'),
              time: getInlineError('time'),
              guests: getInlineError('guests'),
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default BookingPage;
