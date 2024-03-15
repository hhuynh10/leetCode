import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import { postListRoute } from "./pages/PostList";
import { userListRoute } from "./pages/UserList";
import { todoListRoute } from "./pages/TodoList";
import { postRoute } from "./pages/Post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" /> },
      {
        path: "posts",
        children: [
          { index: true, ...postListRoute },
          { path: "postId", ...postRoute},
        ],
      },
      { path: "users", children: [{ index: true, ...userListRoute }] },
      { path: "todos", children: [{ index: true, ...todoListRoute }] },
    ],
  },
]);
