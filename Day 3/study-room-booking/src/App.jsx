import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import BookRoom from "./pages/BookRoom.jsx";
import MyBookings from "./pages/MyBookings.jsx";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/book" element={<BookRoom />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
