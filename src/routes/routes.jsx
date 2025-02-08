import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import AddQuery from "../pages/AddQuery";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyQueries from "../pages/MyQueries";
import MyRecommendations from "../pages/MyRecommendations";
import Queries from "../pages/Queries";
import QueryDetails from "../pages/QueryDetails";
import RecommendationsForMe from "../pages/RecommendationsForMe";
import Signup from "../pages/Signup";
import UpdateQuery from "../pages/UpdateQuery";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/queries",
        element: <Queries />,
        loader: () => fetch("http://localhost:3000/queries"),
      },
      {
        path: "/my-queries",
        element: (
          <PrivateRoute>
            <MyQueries />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-query",
        element: (
          <PrivateRoute>
            <AddQuery />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/query/details/:id",
        element: (
          <PrivateRoute>
            <QueryDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/queries/${params.id}`),
      },
      {
        path: "/query/update/:id",
        element: <UpdateQuery />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/queries/${params.id}`),
      },
      {
        path: "/recommendations-for-me",
        element: (
          <PrivateRoute>
            <RecommendationsForMe />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-recommendations",
        element: (
          <PrivateRoute>
            <MyRecommendations />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
