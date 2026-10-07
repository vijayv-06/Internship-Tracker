import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";

function App() {
  return (
    <div>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/rooms"
          element={<Rooms />}
        />

      </Routes>

    </div>
  );
}

export default App;