import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import LoadingSpinner from "../components/LoadingSpinner";
import PrivateRoute from "./PrivateRoute";

const AddQuery = lazy(() => import("../pages/AddQuery"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Home = lazy(() => import("../pages/Home"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const MyQueries = lazy(() => import("../pages/MyQueries"));
const MyRecommendations = lazy(() => import("../pages/MyRecommendations"));
const Queries = lazy(() => import("../pages/Queries"));
const QueryDetails = lazy(() => import("../pages/QueryDetails"));
const RecommendationsForMe = lazy(() =>
  import("../pages/RecommendationsForMe")
);
const Signup = lazy(() => import("../pages/Signup"));
const UpdateQuery = lazy(() => import("../pages/UpdateQuery"));

const withSuspense = (Component) => (
  <Suspense fallback={<LoadingSpinner />}>{Component}</Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: withSuspense(<ErrorPage />),
    children: [
      {
        path: "/",
        element: withSuspense(<Home />),
      },
      {
        path: "/queries",
        element: withSuspense(<Queries />),
        loader: () =>
          fetch("https://ph-assignment-11-server-ten.vercel.app/queries"),
      },
      {
        path: "/my-queries",
        element: withSuspense(
          <PrivateRoute>
            <MyQueries />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-query",
        element: withSuspense(
          <PrivateRoute>
            <AddQuery />
          </PrivateRoute>
        ),
      },
      {
        path: "/loginpage",
        element: withSuspense(<LoginPage />),
      },
      {
        path: "/signup",
        element: withSuspense(<Signup />),
      },
      {
        path: "/query/details/:id",
        element: withSuspense(
          <PrivateRoute>
            <QueryDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://ph-assignment-11-server-ten.vercel.app/queries/${params.id}`
          ),
      },
      {
        path: "/query/update/:id",
        element: withSuspense(<UpdateQuery />),
        loader: ({ params }) =>
          fetch(
            `https://ph-assignment-11-server-ten.vercel.app/queries/${params.id}`
          ),
      },
      {
        path: "/recommendations-for-me",
        element: withSuspense(
          <PrivateRoute>
            <RecommendationsForMe />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-recommendations",
        element: withSuspense(
          <PrivateRoute>
            <MyRecommendations />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
