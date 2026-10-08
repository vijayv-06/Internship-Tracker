function BookingCard({ booking }) {
  return (
    <div className="rounded-2xl border-l-4 border-purple-500 bg-white p-6 shadow-md">
      <h3 className="text-lg font-bold text-gray-900">📚 {booking.roomName}</h3>

      <dl className="mt-4 space-y-2 text-gray-700">
        <div className="flex justify-between gap-4">
          <dt className="text-gray-500">Student Name</dt>
          <dd className="font-medium">{booking.studentName}</dd>
        </div>
        {booking.building && (
          <div className="flex justify-between gap-4">
            <dt className="text-gray-500">Building</dt>
            <dd className="font-medium">{booking.building}</dd>
          </div>
        )}
        <div className="flex justify-between gap-4">
          <dt className="text-gray-500">Date</dt>
          <dd className="font-medium">{booking.date}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-gray-500">Time</dt>
          <dd className="font-medium">{booking.time}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-gray-500">Number of Students</dt>
          <dd className="font-medium">{booking.students}</dd>
        </div>
      </dl>
    </div>
  );
}

export default BookingCard;
