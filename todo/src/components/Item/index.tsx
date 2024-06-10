import React from "react";

interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

interface ItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({
  todo,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <li
      role="todo-item"
      className={`border-b border-gray-200 px-8 flex items-center justify-between py-4 ${todo.completed? "bg-emerald-100" : ""}`}
    >
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 checked:bg-emerald-800 accent-emerald-600"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <span className={todo.completed ? "line-through text-emerald-600" : "text-blue-600"}>
          {todo.description}
        </span>
      </label>

      <button
        data-testid={`delete-button-${todo.id}`}
        className="text-red-500 hover:text-red-700 mr-2 delete-btn"
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Item;
