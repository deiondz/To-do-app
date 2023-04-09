import { React, useState } from "react";

function TodoEdit({ task, todoEdit }) {
  const [value, setValue] = useState(task.task);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    value ? todoEdit(value, task.id) : todoEdit(task.task, task.id);
  };

  return (
    <div className="todo-Edit">
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Update"
          maxLength={130}
        ></textarea>
        <button className="editbtn">Edit</button>
      </form>
    </div>
  );
}

export default TodoEdit;
