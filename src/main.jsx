import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CommentsContextProvider } from "./contexts/CommentsContext";
import Aplication from "./Aplication";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode >
    <div className="bg-[#080A35] h-100 min-h-screen ">
      <CommentsContextProvider>
        <Aplication></Aplication>
      </CommentsContextProvider>
    </div>
  </React.StrictMode>
);
