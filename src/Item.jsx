import React, { useState } from "react";
import { CiTrash } from "react-icons/ci";

const Item = ({ removeItem, item, toggleItem }) => {
  const { id, text, checked } = item;

  return (
    <div className="single-item">
      <input
        required
        type="checkbox"
        checked={checked}
        onChange={() => toggleItem(id)}
      />
      <p
        style={{
          textDecoration: checked ? "line-through" : "none",
        }}
      >
        {text}
      </p>
      <button className="remove-btn" onClick={() => removeItem(item)}>
        <CiTrash className="icon" />
      </button>
    </div>
  );
};

export default Item;
