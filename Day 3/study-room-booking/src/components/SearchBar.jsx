// Controlled input: the value comes from the parent's state
function SearchBar({ search, setSearch }) {
  return (
    <div>
      <label htmlFor="room-search" className="sr-only">
        Search rooms
      </label>
      <input
        id="room-search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search by room name or building..."
        className="w-full rounded-full border border-gray-300 bg-white px-6 py-3 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
      />
    </div>
  );
}

export default SearchBar;
