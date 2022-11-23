import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./styles/global.css";
import MyTeam from "./pages/MyTeam";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyTeam />
  </React.StrictMode>
);
