import React, { useState } from "react";
import Form from "./Form";
import GroceryItems from "./GroceryItems";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import ClearItemsButton from "./ClearItemsButton";
const App = () => {
  const [items, setItems] = useState([]);

  const addGroceryItem = (text) => {
    const newItem = { id: nanoid(), text, checked: false };
    setItems([...items, newItem]);
  };

  const removeAllItems = () => {
    setItems([]);
  };

  const removeItem = (itemToRemove) => {
    const updatedItem = items.filter((el) => el !== itemToRemove);
    setItems(updatedItem);
    console.log("Item was delete:", items);
  };

  const toggleItem = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };
  return (
    <main>
      <section className="section-center">
        <Form items={items} addGroceryItem={addGroceryItem} />
        <GroceryItems
          items={items}
          removeItem={removeItem}
          toggleItem={toggleItem}
        />
        <ClearItemsButton items={items} removeAllItems={removeAllItems} />
        <ToastContainer position="top-center" />
      </section>
    </main>
  );
};

export default App;
