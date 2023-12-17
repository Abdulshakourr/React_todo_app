import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ListItems } from "./components/ListItems";
import { Footer } from "./components/Footer";
import { AddItems } from "./components/AddItems";
import { Search } from "./components/Search";
import { Content } from "./components/Content";

const App = () => {
  const API_URL = "http://localhost:3500/items";
  // usestates
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetcheror, setFecheror] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("did not received expected data");
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFecheror(null);
      } catch (err) {
        setFecheror(err.message);
      }
    };

    setTimeout(() => {
      (async () => await fetchData())();
    }, 2000);
  }, []);

  ///
  /////
  ////////
  ///////////

  // add item function
  const AddItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listitems = [...items, myNewItem];
    setItems(listitems);
  };

  const handleCheck = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listitems);
  };

  // Delete function

  const handleDelete = (id) => {
    const list = items.filter((item) => item.id !== id);
    setItems(list);
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

        <main>
          {fetcheror && (
            <h3 className="text-center text-xl font-bold text-red-500">{`Error: ${fetcheror}`}</h3>
          )}

          {!fetcheror && (
            <Content
              items={items.filter((item) =>
                item.item.toLowerCase().includes(search.toLowerCase())
              )}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          )}
        </main>
        <Footer length={items.length} />
      </div>
    </>
  );
};

export default App;
