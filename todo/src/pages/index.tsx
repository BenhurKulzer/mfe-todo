import React, { useState, useEffect } from "react";

import List from "../components/List";
import Filter from "../components/Filter";
import TextInput from "../components/TextInput";

import {
  setToLocalStorage,
  readFromLocalStorage,
} from "../services";

import { validateTodos } from "../utils";
import { FilterValue, Todo } from "../@types";

import {
  FILTER_VALUES,
  FILTER_VALUE_LIST,
  TODOS_STORAGE_KEY,
} from "../constants";

import "../index.scss";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterValue>(FILTER_VALUE_LIST[0]);

  useEffect(() => {
    readFromLocalStorage({
      storageKey: TODOS_STORAGE_KEY,
      validationFn: validateTodos,
      successFn: setTodos,
    });
  }, []);

  const addTodo = (description: string) => {
    const newTodo: Todo = { id: Date.now(), description, completed: false };
    setNewTodos([...todos, newTodo]);
  };

  const setNewTodos = (newTodos: Todo[]) => {
    setTodos(newTodos);
    setToLocalStorage({ storageKey: TODOS_STORAGE_KEY, value: newTodos });
  };

  const removeTodo = (toDoId: number) => {
    const newTodos: Todo[] = todos.filter((todo) => todo.id != toDoId);
    setNewTodos(newTodos);
  };

  const toggleTodo = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setNewTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTER_VALUES.ACTIVE) return !todo.completed;
    if (filter === FILTER_VALUES.COMPLETED) return todo.completed;
    return true;
  });

  const onFilterChange = (newFilterValue: FilterValue) => {
    setFilter(newFilterValue);
  };

  return (
    <div className="container mx-auto my-10" data-testid="todo-app-mfe-component">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-md min-h-96 rounded-lg p-6">
          <TextInput addTodo={addTodo} />

          <Filter
            selectedFilter={filter}
            onFilterChange={onFilterChange}
          />

          <List
            todos={filteredTodos}
            filterStatus={filter}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
