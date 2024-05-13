import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import NotFoundPage from "./scenes/NotFoundPage.tsx";
import Home from "./scenes/navbar/Home.tsx";
import Marketplace from "./scenes/navbar/Markerplace.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
