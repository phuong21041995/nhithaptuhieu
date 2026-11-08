import React from "react";
import ReactDOM from "react-dom/client";
import { GameApp } from "@/components/hieu/game";
import "./styles.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <GameApp />
    </React.StrictMode>
  );
}
