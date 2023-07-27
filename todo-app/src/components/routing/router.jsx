import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from './home';
import TodoApp from "../todo-app/todo";

const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/todo",
          element: <TodoApp title={"My todo app"} />
        }
    ]);

    return <RouterProvider router={router} />
}

export default Router;
