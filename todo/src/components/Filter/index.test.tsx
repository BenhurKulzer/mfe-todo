import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Filter from ".";

import { FILTER_VALUE_LIST } from "../../constants";

describe("Filter Component", () => {
  const mockOnFilterChange = jest.fn();

  beforeEach(() => {
    mockOnFilterChange.mockClear();
  });

  test("render filter options", () => {
    render(<Filter selectedFilter={FILTER_VALUE_LIST[0]} onFilterChange={mockOnFilterChange} />);
    FILTER_VALUE_LIST.forEach((value) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  test("initially selects the first option", () => {
    render(<Filter onFilterChange={mockOnFilterChange} selectedFilter={FILTER_VALUE_LIST[0]} />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveValue(FILTER_VALUE_LIST[0]);
  });

  test("calls onFilterChange with the correct value when an option is selected", () => {
    render(<Filter onFilterChange={mockOnFilterChange} selectedFilter={FILTER_VALUE_LIST[0]} />);
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: FILTER_VALUE_LIST[1] } });
    expect(mockOnFilterChange).toHaveBeenCalledWith(FILTER_VALUE_LIST[1]);
  });
});