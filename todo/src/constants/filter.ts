import { FilterValue } from "../@types";

interface filterValuesType {
  ALL: FilterValue;
  ACTIVE: FilterValue;
  COMPLETED: FilterValue;
}

export const FILTER_VALUES: filterValuesType = {
  ALL: "All",
  ACTIVE: "Active",
  COMPLETED: "Completed",
};

export const FILTER_VALUE_LIST = [
  FILTER_VALUES.ALL,
  FILTER_VALUES.ACTIVE,
  FILTER_VALUES.COMPLETED,
];

export const TODOS_STORAGE_KEY = "todos";
