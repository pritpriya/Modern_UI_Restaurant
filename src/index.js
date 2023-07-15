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
import App2 from './App2'; 
import Cart from "./pages/cart"
import Order from './pages/Order'
import OrderSummary from "./pages/Summary/OrderSummary";
import Orders from "./pages/admin/orders";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/order",
    element:  <Order />
  },
  {
    path: "/menu",
    element: <App2 />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/summary",
    element: <OrderSummary />
  },
  {
    path: "/admin/orders",
    element: <Orders/>
  }
]);
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

