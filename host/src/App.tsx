import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Loader from "./components/Loader";

import "./index.scss";

const App = () => {
  return (
    <>
      <Header />

      <Loader />
    </>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to get the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
