import React, { useState } from "react";

const AddTask = ({ addtask }) => {
  const [value, setValue] = useState("");
  const addItem = () => {
    addtask(value);
    setValue(" ")
  };
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          className="input"
          value={value}
          placeholder="add task"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={addItem} className="button" >
          ADD
        </button>
      </div>
    </> 
  );
};

export default AddTask;
