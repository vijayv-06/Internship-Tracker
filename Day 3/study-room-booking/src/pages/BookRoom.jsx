import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import rooms from "../data/rooms.js";

const STORAGE_KEY = "studyRoomBookings";

// Only rooms that can be booked appear in the dropdown
const availableRooms = rooms.filter((room) => room.available === true);

function BookRoom() {
  // If the user clicked "Book Room" on a card, the room id is in the URL (?room=2)
  const [searchParams] = useSearchParams();
  const preselected = availableRooms.find(
    (r) => String(r.id) === searchParams.get("room")
  );

  const [formData, setFormData] = useState({
    studentName: "",
    room: preselected ? String(preselected.id) : "",
    date: "",
    time: "",
    students: "",
  });
  const [errors, setErrors] = useState({});
  const [submittedBooking, setSubmittedBooking] = useState(null);

  // Find the chosen room so we know its capacity
  const selectedRoom = availableRooms.find((r) => String(r.id) === formData.room);

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.studentName.trim()) newErrors.studentName = "Student name is required.";
    if (!formData.room) newErrors.room = "Please select a room.";
    if (!formData.date) newErrors.date = "Please choose a date.";
    else if (formData.date < today) newErrors.date = "Date cannot be in the past.";
    if (!formData.time) newErrors.time = "Please choose a time.";

    if (!formData.students) {
      newErrors.students = "Number of students is required.";
    } else if (Number(formData.students) < 1) {
      newErrors.students = "At least 1 student is required.";
    } else if (selectedRoom && Number(formData.students) > selectedRoom.capacity) {
      newErrors.students = `${selectedRoom.name} can hold only ${selectedRoom.capacity} students.`;
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading

    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setSubmittedBooking(null);
      return;
    }

    const newBooking = {
      id: Date.now(),
      studentName: formData.studentName.trim(),
      roomName: selectedRoom.name,
      building: selectedRoom.building,
      date: formData.date,
      time: formData.time,
      students: Number(formData.students),
    };

    // 1. get existing bookings  2. add new one  3. save to localStorage
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const updated = [...existing, newBooking];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // 4. update React state and clear the form
    setSubmittedBooking(newBooking);
    setFormData({ studentName: "", room: "", date: "", time: "", students: "" });
  };

  const inputClass = (field) =>
    `mt-1 w-full rounded-lg border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-300 ${
      errors[field] ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">📅 Book a Study Room</h1>
      <p className="mt-2 text-gray-600">Fill in the details to submit your booking request.</p>

      {submittedBooking && (
        <div className="mt-8 rounded-2xl border border-green-300 bg-green-50 p-6" role="status">
          <p className="text-lg font-bold text-green-800">
            ✅ Booking request submitted successfully!
          </p>
          <ul className="mt-3 space-y-1 text-gray-700">
            <li><strong>Student Name:</strong> {submittedBooking.studentName}</li>
            <li><strong>Room:</strong> {submittedBooking.roomName} ({submittedBooking.building})</li>
            <li><strong>Date:</strong> {submittedBooking.date}</li>
            <li><strong>Time:</strong> {submittedBooking.time}</li>
            <li><strong>Number of Students:</strong> {submittedBooking.students}</li>
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5 rounded-2xl bg-white p-6 shadow-md sm:p-8">
        <div>
          <label htmlFor="studentName" className="font-semibold text-gray-800">Student Name</label>
          <input
            id="studentName"
            name="studentName"
            type="text"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={inputClass("studentName")}
          />
          {errors.studentName && <p className="mt-1 text-sm text-red-600">{errors.studentName}</p>}
        </div>

        <div>
          <label htmlFor="room" className="font-semibold text-gray-800">Select Room</label>
          <select
            id="room"
            name="room"
            value={formData.room}
            onChange={handleChange}
            className={inputClass("room")}
          >
            <option value="">-- Choose a room --</option>
            {availableRooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name} - {room.building}
              </option>
            ))}
          </select>
          {selectedRoom && (
            <p className="mt-1 text-sm text-gray-500">Capacity: {selectedRoom.capacity} students</p>
          )}
          {errors.room && <p className="mt-1 text-sm text-red-600">{errors.room}</p>}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="date" className="font-semibold text-gray-800">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              min={today}
              value={formData.date}
              onChange={handleChange}
              className={inputClass("date")}
            />
            {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
          </div>

          <div>
            <label htmlFor="time" className="font-semibold text-gray-800">Time</label>
            <input
              id="time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              className={inputClass("time")}
            />
            {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="students" className="font-semibold text-gray-800">Number of Students</label>
          <input
            id="students"
            name="students"
            type="number"
            min="1"
            value={formData.students}
            onChange={handleChange}
            placeholder="e.g. 4"
            className={inputClass("students")}
          />
          {errors.students && <p className="mt-1 text-sm text-red-600">{errors.students}</p>}
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 px-6 py-3 text-lg font-bold text-white transition hover:opacity-90"
        >
          Submit Booking Request
        </button>
      </form>
    </div>
  );
}

export default BookRoom;
