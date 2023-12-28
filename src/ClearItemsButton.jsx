import React, { useState } from "react";

const ClearItemsButton = ({ items, removeAllItems }) => {
  return (
    <>
      {items.length === 0 ? (
        <p
          style={{
            textTransform: "uppercase",
            color: "grey",
            textAlign: "center",
          }}
        >
          no items added
        </p>
      ) : (
        <button
          onClick={() => removeAllItems()}
          className="clear-items"
          style={{
            visibility: items.length > 1 ? "visible" : "hidden",
          }}
        >
          Clear Items
        </button>
      )}
    </>
  );
};

export default ClearItemsButton;
