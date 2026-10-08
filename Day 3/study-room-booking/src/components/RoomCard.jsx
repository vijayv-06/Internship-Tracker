import { Link } from "react-router-dom";

function RoomCard({ room }) {
  return (
    <div className="flex flex-col rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg">
      <div className="text-4xl">📚</div>
      <h3 className="mt-3 text-xl font-bold text-gray-900">{room.name}</h3>

      <p className="mt-2 text-gray-600">🏫 {room.building}</p>
      <p className="text-gray-600">👥 Capacity: {room.capacity}</p>

      <p
        className={`mt-3 font-semibold ${
          room.available ? "text-green-700" : "text-red-700"
        }`}
      >
        {room.available ? "🟢 Available" : "🔴 Booked"}
      </p>

      <div className="mt-auto pt-5">
        {room.available ? (
          <Link
            to={`/book?room=${room.id}`}
            className="block rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2.5 text-center font-semibold text-white transition hover:opacity-90"
          >
            Book Room
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="w-full cursor-not-allowed rounded-full bg-gray-200 px-5 py-2.5 font-semibold text-gray-500"
          >
            Not Available
          </button>
        )}
      </div>
    </div>
  );
}

export default RoomCard;
