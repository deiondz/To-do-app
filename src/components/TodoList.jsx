import React from "react";
import { useState } from "react";

function TodoList({ task, handleDelete, todoEdit, handleComplete }) {
  const [complete, setComplete] = useState({
    css: "listitem",
    btn: "Done",
  });
  const handleStatus = () => {
    if (!task.completed) {
      setComplete({ css: "complete", btn: "Not done" });
    } else {
      setComplete({ css: "listitem", btn: "Done" });
    }
  };
  return (
    <div className="list-container">
      <p className={complete.css}>{task.task}</p>
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
          className="listBtn-child edit"
          onClick={() => {
            handleComplete(task.id);
            handleStatus();
          }}
        >
          {complete.btn}
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
