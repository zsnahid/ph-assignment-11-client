/* eslint-disable react/prop-types */
import { Spinner } from "@material-tailwind/react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex-grow flex place-content-center">
        <Spinner className="m-20" />
      </div>
    );
  }

  if (user) return children;
  else return <Navigate to="/loginpage" />;
}
