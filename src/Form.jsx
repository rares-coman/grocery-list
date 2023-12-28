import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addGroceryItem, items }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [existingValue, isExistingValue] = useState([]);
  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await addGroceryItem(enteredValue);
      setEnteredValue("");
      toast.success("Item added succesfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handlerSubmit}>
      <h4>Grocery bud</h4>
      <div className="form-control">
        <input
          required
          type="text"
          className="form-input"
          value={enteredValue}
          onChange={(e) => setEnteredValue(e.target.value)}
          placeholder="Apples"
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
