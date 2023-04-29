import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;

/**
 * ---------------------------------
 * STEPS
 * --------------------------------
 * 1. check user is logged in or not
 * 2. if user is logged in and, then allow them to visit the route
 * 3. Else redirect to the login page
 * 4. setup the private route
 * 5. handle loading
 *
 * **/
