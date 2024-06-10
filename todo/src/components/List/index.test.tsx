import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import List from ".";

describe("List", () => {
  const todos = [
    { id: 1, description: "Test Todo 1", completed: false },
    { id: 2, description: "Test Todo 2", completed: true },
  ];

  const mockToggleTodo = jest.fn();
  const mockRemoveTodo = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("render when the todo list is empty", () => {
    render(
      <List
        todos={[]}
        filterStatus="All"
        toggleTodo={mockToggleTodo}
        removeTodo={mockRemoveTodo}
      />
    );

    expect(screen.getByText("Create a new todo to start")).toBeInTheDocument();
  });

  test("renders a list of todos", () => {
    render(
      <List
        todos={todos}
        filterStatus="All"
        toggleTodo={mockToggleTodo}
        removeTodo={mockRemoveTodo}
      />
    );
    expect(screen.getAllByRole("todo-item")).toHaveLength(todos.length);
  });
});
