import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import AddQuery from "../pages/AddQuery";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyQueries from "../pages/MyQueries";
import Signup from "../pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/my-queries",
        element: <MyQueries />,
        loader: () => fetch("http://localhost:3000/queries"),
      },
      {
        path: "/add-query",
        element: <AddQuery />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
