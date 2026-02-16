import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

import './Main.css';

const bookingTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

export function initializeTimes() {
  return bookingTimes;
}

export function updateTimes(state, action) {
  if (action.type === 'date_changed') {
    return bookingTimes;
  }

  return state;
}

function Main() {
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

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              onDateChangeFromMain={handleDateChange}
            />
          }
        />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </main>
  );
}

export default Main;