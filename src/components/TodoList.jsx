import React from "react";

function TodoList({ task, handleDelete, todoEdit }) {
  return (
    <div className="list-container">
      <p className="listitem">{task.task}</p>
      <div className="listBtn">
        <button
          className="listBtn-child edit"
          onClick={() => {
            todoEdit(task.task, task.id);
          }}
        >
          Edit
        </button>
        <button
          className="listBtn-child"
          onClick={() => {
            handleDelete(task.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoList;
