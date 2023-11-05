import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/header/Header";
import "./styles.css"



const router = createBrowserRouter([
  {
    path: "/",
    element: 
    (
      <Header />
    ),
  },
  {
    path: "/log-in",
    element: <div>Hello world!</div>,
  },
  {
    path: "/sign-up",
    element: <div>Hello world!</div>,
  },
  {
    path: "/user",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);