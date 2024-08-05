// src/components/PrivateRoute.js

import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token"); // Replace this with your authentication logic

  return token ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
