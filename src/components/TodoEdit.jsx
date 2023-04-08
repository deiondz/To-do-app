import { React, useState } from "react";

function TodoEdit({ task, todoEdit }) {
  const [value, setValue] = useState(task.task);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    todoEdit(value, task.id);
  };

  return (
    <div className="todo-Edit">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="editInput"
        />
        <button className="editbtn">Edit</button>
      </form>
    </div>
  );
}

export default TodoEdit;
