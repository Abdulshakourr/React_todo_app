import { ListItems } from "./ListItems";

export const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ListItems
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <h1 className="text-gray-400 font-bold text-4xl mt-10 w-96 mx-auto text-center">
          Empty list
        </h1>
      )}
    </>
  );
};
