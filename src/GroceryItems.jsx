import React, { useState } from "react";
import Item from "./Item";
const GroceryItems = ({ items, removeItem, toggleItem }) => {
  return (
    <article className="items">
      {items.map((item) => {
        return (
          <Item
            item={item}
            key={item.id}
            removeItem={removeItem}
            toggleItem={toggleItem}
          />
        );
      })}
    </article>
  );
};

export default GroceryItems;
