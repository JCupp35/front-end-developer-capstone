import { useReducer, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from '../utilities';

import './Main.css';

const BOOKINGS_STORAGE_KEY = 'bookings';

function loadStoredBookings() {
  const storedBookings = localStorage.getItem(BOOKINGS_STORAGE_KEY);
  return storedBookings ? JSON.parse(storedBookings) : [];
}

export function initializeTimes() {
  return fetchAPI(new Date());
}

export function updateTimes(state, action) {
  if (action.type === 'date_changed') {
    return fetchAPI(new Date(action.selectedDate));
  }

  return state;
}

function Main() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState(loadStoredBookings);

  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const handleDateChange = (selectedDate) => {
    dispatchAvailableTimes({
      type: 'date_changed',
      selectedDate,
    });
  };

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      setBookings((existingBookings) => {
        const updatedBookings = [...existingBookings, formData];
        localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(updatedBookings));
        return updatedBookings;
      });
      navigate('/confirmed');
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              bookings={bookings}
              onDateChangeFromMain={handleDateChange}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </main>
  );
}

export default Main;