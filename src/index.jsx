import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles.css"


import Header from "./components/header/Header";
import Home from "./page/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    (
      <>
        <Header />
        <Home />
      </>
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