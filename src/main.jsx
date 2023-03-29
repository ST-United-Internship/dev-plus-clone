import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PublicRoute } from "./routes/PublicRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

axios.defaults.baseURL = BASE_URL;

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  ...PublicRoute,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
