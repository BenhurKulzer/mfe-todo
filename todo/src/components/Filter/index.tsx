import React from "react";

import { FILTER_VALUE_LIST } from "../../constants";

import { FilterValue } from "../../@types";

interface FilterProps {
  selectedFilter: FilterValue;
  onFilterChange: (value: FilterValue) => void;
}

const Filter: React.FC<FilterProps> = ({ selectedFilter = "All", onFilterChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value as FilterValue;
    onFilterChange(newValue);
  };

  return (
    <div className="relative inline-block text-left mb-4">
      <select
        value={selectedFilter}
        onChange={handleChange}
        data-testid="filter-dropdown"
        className="w-full p-4 bg-white rounded-md shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
        {FILTER_VALUE_LIST.map((value: FilterValue) => (
          <option key={value} value={value}>{value}</option>
          ))}
      </select>
    </div>
  );
};

export default Filter;