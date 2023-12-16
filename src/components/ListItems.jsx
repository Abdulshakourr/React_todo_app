export const ListItems = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul className="w-96 mx-auto">
      {items.map((item) => (
        <li className=" shadow py-2 flex justify-between mb-10" key={item.id}>
          <div className="flex items-center gap-2 ">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
              className="w-6 h-6 rounded border-2 border-gray-300"
            />
            <label
              onClick={() => handleCheck(item.id)}
              className={`${
                item.checked
                  ? "line-through italic text-gray-400 font-bold"
                  : "font-bold text-gray-500  "
              }`}
            >
              {" "}
              {item.item}
            </label>
          </div>
          <button
            onClick={() => handleDelete(item.id)}
            className="bg-red-500 p-1 rounded text-white font-bold"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
