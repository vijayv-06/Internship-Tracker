import { useState } from "react";
import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";

function Rooms() {
  const [search, setSearch] = useState("");

  const filteredRooms = rooms.filter((room) => {
    const roomName = room.name.toLowerCase();
    const building = room.building.toLowerCase();
    const searchText = search.toLowerCase();

    return (
      roomName.includes(searchText) ||
      building.includes(searchText)
    );
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Page Header */}
      <div className="text-center mb-10">

        <p className="text-purple-600 font-semibold">
          CAMPUS STUDY ROOMS
        </p>

        <h1 className="text-4xl font-bold text-gray-800 mt-2">
          📚 Study Rooms
        </h1>

        <p className="text-gray-500 mt-3">
          Find a suitable room for your study session.
        </p>

      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto mb-10">

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search by room name or building..."
          className="w-full px-5 py-4 rounded-xl border border-purple-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

      </div>

      {/* Room Count */}
      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-bold text-gray-700">
          Study Rooms
        </h2>

        <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">
          {filteredRooms.length} Rooms
        </span>

      </div>

      {/* Room Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredRooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
          />
        ))}

      </div>

      {/* No Results */}
      {filteredRooms.length === 0 && (
        <div className="text-center py-16">

          <div className="text-6xl mb-4">
            😕
          </div>

          <h2 className="text-2xl font-bold text-gray-700">
            No Rooms Found
          </h2>

          <p className="text-gray-500 mt-2">
            Try searching for another room or building.
          </p>

        </div>
      )}

    </div>
  );
}

export default Rooms;