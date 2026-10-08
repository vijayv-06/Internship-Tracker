import { useState } from "react";
import rooms from "../data/rooms.js";
import RoomCard from "../components/RoomCard.jsx";
import SearchBar from "../components/SearchBar.jsx";

function Rooms() {
  const [search, setSearch] = useState("");

  // filter() keeps rooms whose name or building contains the search text
  const query = search.trim().toLowerCase();
  const filteredRooms = rooms.filter(
    (room) =>
      room.name.toLowerCase().includes(query) ||
      room.building.toLowerCase().includes(query)
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">📚 Study Rooms</h1>
      <p className="mt-2 text-gray-600">Find a suitable room for your study session.</p>

      <div className="mt-8 max-w-xl">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <p className="mt-6 font-semibold text-purple-700">
        {filteredRooms.length} {filteredRooms.length === 1 ? "Room" : "Rooms"}
      </p>

      {filteredRooms.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl bg-white p-12 text-center shadow-md">
          <div className="text-6xl">😕</div>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">No Rooms Found</h2>
          <p className="mt-2 text-gray-600">Try searching for another room or building.</p>
        </div>
      )}
    </div>
  );
}

export default Rooms;
