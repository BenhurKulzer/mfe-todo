import React from "react";
import ReactDOM from "react-dom/client";

import TodoApp from "./pages";

const App = () => <TodoApp />;

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to get the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<App />);
