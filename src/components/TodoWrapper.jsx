import React, { useState, useEffect } from "react";
import TodoInput from "./Todoinput";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import TodoEdit from "./TodoEdit";
uuidv4();

function TodoWrapper() {
  const [list, newList] = useState([]);
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("list"));
    if (list) {
      newList(list);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addTodo = (todo) => {
    newList([
      ...list,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  // Below function deletes the task in hand.

  const handleDelete = (id) => {
    newList((current) => current.filter((list) => list.id !== id));
  };
  const todoEdit = (value, id) => {
    newList(
      list.map((element) => {
        return element.id === id
          ? { ...element, isEditing: !element.isEditing, task: value }
          : element;
      })
    );
  };
  return (
    <div className="todo-Wrapper">
      <h1>To do list </h1>
      <TodoInput addTodo={addTodo} />
      <p className="tagline">
        Get Things Done: <span>Your Personal To-Do List for Today </span>
      </p>
      {list.map((element, index) =>
        element.isEditing ? (
          <TodoEdit task={element} todoEdit={todoEdit} key={index} />
        ) : (
          <TodoList
            task={element}
            key={index}
            handleDelete={handleDelete}
            todoEdit={todoEdit}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
