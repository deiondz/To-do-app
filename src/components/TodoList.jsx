import React from "react";

function TodoList({ task, handleDelete, todoEdit }) {
  return (
    <div className="list-container">
      <p className="listitem">{task.task}</p>
      <div className="listBtn">
        <button
          className="edit"
          onClick={() => {
            todoEdit(task.task, task.id);
          }}
        >
          <i class="bx bxs-edit"></i>
        </button>
        <button
          onClick={() => {
            handleDelete(task.id);
          }}
        >
          <i class="bx bx-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoList;
