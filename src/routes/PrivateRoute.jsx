import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({children}) => {
  let {user, loading} = useContext(AuthContext);

  if (loading) {
    return "Loading...";
  }

  if (user) {
    return children;
  }

  return (
    <>
      <Navigate to="/login" replace />
    </>
  );
};

export default PrivateRoute;
