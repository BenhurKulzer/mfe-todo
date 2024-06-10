import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";

import TodoApp from "./index";

describe("Todo Component", () => {
  test("renders todo MFE component", () => {
    render(<TodoApp />);

    expect(screen.getByTestId('todo-app-mfe-component')).toBeInTheDocument();
  });

  test("Adds a new todo by clicking Add", () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText(/Add a new task/);
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("can toggle todo status", () => {
    const todoName = "Task to Complete";
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: todoName } });
    fireEvent.click(addButton);

    const checkbox = screen.getByRole("checkbox", { name: todoName });
    const todoItem = screen.getByText(todoName);

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(todoItem).toHaveClass("line-through");

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(todoItem).not.toHaveClass("line-through");
  });

  test("applies filters correctly and updates UI accordingly", async () => {
    const activeTodoName = "Learn React";
    const completedTodoName = "Finish documentation";

    render(<TodoApp />);
    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add");
  
    fireEvent.change(input, { target: { value: activeTodoName } });
    fireEvent.click(addButton);
  
    fireEvent.change(input, { target: { value: completedTodoName } });
    fireEvent.click(addButton);
  
    expect(screen.getByText(activeTodoName)).toBeInTheDocument();
    expect(screen.getByText(completedTodoName)).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox", { name: completedTodoName });
    fireEvent.click(checkbox);

    const filterDropdown = screen.getByTestId("filter-dropdown");
    await userEvent.selectOptions(filterDropdown, ["Active"]);
    expect(screen.queryByText(completedTodoName)).not.toBeInTheDocument();
    expect(screen.getByText(activeTodoName)).toBeInTheDocument();
  
    await userEvent.selectOptions(filterDropdown, ["Completed"]);  
    expect(screen.queryByText(activeTodoName)).not.toBeInTheDocument();
    expect(screen.getByText(completedTodoName)).toBeInTheDocument();

    await userEvent.selectOptions(filterDropdown, ["All"]);
    expect(screen.getByText(activeTodoName)).toBeInTheDocument();
    expect(screen.getByText(completedTodoName)).toBeInTheDocument();
  });
});
