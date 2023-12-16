export const AddItems = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-96 mx-auto flex  justify-center items-center py-4 gap-4"
    >
      <input
        className="rounded border-gray-300 border-2 focus:outline-none p-2"
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="bg-purple-500 text-white rounded px-4 text-xl py-2" type="submit">Add</button>
    </form>
  );
};
