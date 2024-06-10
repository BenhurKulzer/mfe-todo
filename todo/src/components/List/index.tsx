import React from "react";

import Item from "../Item";

import { Todo } from "../../@types";

import NoDataSvg from "../../assets/Empty";
import NewDataSvg from "../../assets/New";

interface ListProps {
  todos: Todo[];
  filterStatus: string;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const List: React.FC<ListProps> = ({
  todos,
  filterStatus,
  toggleTodo,
  removeTodo,
}) => {
  if (!todos.length) {
    return (
      <div className="flex flex-col p-16 g-8 items-center justify-center">
        <div className={`text-center text-lg leading-8 ${filterStatus !== "All" ? "text-blue-600" : "text-teal-500"}`}>{filterStatus !== "All" ? `Sorry, we doesnt have any ${filterStatus} item to show` : "Create a new todo to start"}</div>

        {filterStatus !== "All" ? <NoDataSvg /> : <NewDataSvg />}
      </div>
    );
  }
  
  return (
    <ul>
      {todos.map((todo) => (
        <Item
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default List;
