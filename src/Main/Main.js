import { useReducer, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from '../utilities';

import './Main.css';

const BOOKINGS_STORAGE_KEY = 'bookings';
const INITIAL_BOOKING_FORM = {
  name: '',
  phone: '',
  date: '',
  time: '',
  guests: '1',
  occasion: '',
};

function loadStoredBookings() {
  const storedBookings = localStorage.getItem(BOOKINGS_STORAGE_KEY);
  return storedBookings ? JSON.parse(storedBookings) : [];
}

function saveBookings(bookings) {
  localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
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
  const [, setBookings] = useState(loadStoredBookings);
  const [pendingBooking, setPendingBooking] = useState(INITIAL_BOOKING_FORM);

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

  const continueToReview = (formData) => {
    setPendingBooking(formData);
    navigate('/confirmed');
  };

  const confirmBooking = () => {
    if (submitAPI(pendingBooking)) {
      setBookings((prevBookings) => {
        const updatedBookings = [...prevBookings, pendingBooking];
        saveBookings(updatedBookings);
        return updatedBookings;
      });
      setPendingBooking(INITIAL_BOOKING_FORM);
      navigate('/', { state: { bookingConfirmed: true } });
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
              bookingData={pendingBooking}
              onBookingDataChange={setPendingBooking}
              onDateChangeFromMain={handleDateChange}
              continueToReview={continueToReview}
            />
          }
        />
        <Route
          path="/confirmed"
          element={
            <ConfirmedBooking
              bookingData={pendingBooking}
              onBackToBooking={() => navigate('/booking')}
              onConfirmBooking={confirmBooking}
            />
          }
        />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </main>
  );
}

export default Main;