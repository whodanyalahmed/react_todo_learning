import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div class="my-3 mt-4">
      <h4>{todo.title}</h4>

      <span>{todo.desc}</span>
      <button
        className="btn btn-sm btn-danger mx-2"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
      <hr />
    </div>
  );
};
