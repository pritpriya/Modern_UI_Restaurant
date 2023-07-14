import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
//import {Order} from './components';
//import LoginForm from "./LoginForm";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/order",
    element: <App1 />
  },
  {
    path: "/menu",
    element: <App2 />
  },
  {
    path: "/ordersummary",
    element: <App3 />
  },
]);
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

