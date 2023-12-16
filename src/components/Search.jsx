export const Search = ({ search, setSearch }) => {
  return (
    <form
      className="w-96 mx-auto  rounded mb-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="rounded-full pl-2 w-20 focus:w-full transition-all ease-in-out border-gray-300 border-2 focus:outline-none p-1"
        type="text"
        placeholder="search"
        role="searchbox"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};
