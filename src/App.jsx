import { useState } from "react";
import { Header } from "./components/Header";
import { ListItems } from "./components/ListItems";
import { Footer } from "./components/Footer";
import { AddItems } from "./components/AddItems";
import { Search } from "./components/Search";

const App = () => {

  // usestates
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("task")));

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  // function
  const setandSaveItems = (newItem) => {
    setItems(newItem);
    localStorage.setItem("task", JSON.stringify(newItem));
  };
// add item function
  const AddItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listitems = [...items, myNewItem];
    setandSaveItems(listitems);
  };

  const handleCheck = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setandSaveItems(listitems);
  };

  // Delete function

  const handleDelete = (id) => {
    const list = items.filter((item) => item.id !== id);
    setandSaveItems(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    AddItem(newItem);
    setNewItem("");
  };

  return (
    <>
      <div className="h-screen flex flex-col">
        <Header title="Tasks" />
        <AddItems
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <Search search={search} setSearch={setSearch} />
        {items.length ? (
          <ListItems
            items={items.filter(item => ((item.item).toLowerCase()).includes((search.toLowerCase())))}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ) : (
          <h1 className="text-gray-400 font-bold text-4xl mt-10 w-96 mx-auto text-center">
            Empty list
          </h1>
        )}
        <Footer length={items.length} />
      </div>
    </>
  );
};

export default App;
