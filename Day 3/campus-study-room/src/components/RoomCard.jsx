import { Link } from "react-router-dom";

function RoomCard({ room }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

      {/* Icon */}
      <div className="text-4xl mb-4">
        📚
      </div>

      {/* Room Name */}
      <h2 className="text-xl font-bold text-purple-700 mb-3">
        {room.name}
      </h2>

      {/* Building */}
      <p className="text-gray-600 mb-2">
        🏫 {room.building}
      </p>

      {/* Capacity */}
      <p className="text-gray-600 mb-4">
        👥 Capacity: {room.capacity}
      </p>

      {/* Availability */}
      <div className="mb-5">
        {room.available ? (
          <span className="inline-block bg-green-100 text-green-700 px-3 py-2 rounded-full text-sm font-semibold">
            🟢 Available
          </span>
        ) : (
          <span className="inline-block bg-red-100 text-red-700 px-3 py-2 rounded-full text-sm font-semibold">
            🔴 Booked
          </span>
        )}
      </div>

      {/* Button */}
      {room.available ? (
        <Link
          to="/book"
          className="block text-center bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700"
        >
          Book Room
        </Link>
      ) : (
        <button
          disabled
          className="w-full bg-gray-300 text-gray-500 py-3 rounded-xl cursor-not-allowed"
        >
          Not Available
        </button>
      )}

    </div>
  );
}

export default RoomCard;