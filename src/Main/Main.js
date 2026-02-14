import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

import './Main.css';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </main>
  );
}

export default Main;