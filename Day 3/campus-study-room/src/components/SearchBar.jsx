function SearchBar({ search, setSearch }) {
  return (
    <div className="max-w-2xl mx-auto mb-10">

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search by room name or building..."
        className="w-full px-5 py-4 rounded-xl border border-purple-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

    </div>
  );
}

export default SearchBar;