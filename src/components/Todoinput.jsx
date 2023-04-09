import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    value ? addTodo(value) : setValue("");
    setValue("");
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="What’s your plans for today?"
          maxLength={130}
        ></textarea>
        <button className="inputAdd">Add task</button>
      </form>
    </div>
  );
}

export default TodoInput;
