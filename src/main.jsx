import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PublicRoute } from "./routes/PublicRoute";
import Avatar from "./components/Avatar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  ...PublicRoute,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
