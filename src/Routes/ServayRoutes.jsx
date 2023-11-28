/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import UseServay from "../Hooks/UseServay";


const ServayRoutes = ({ children }) => {
  const { user, loading } = UseAuth();
  const [isServey, isServeyLoading] = UseServay()

  const locatoin = useLocation();
  console.log("chek servay user user ", isServey, user);

  if (loading || isServeyLoading) {
    return <h3>dsgdysgddaahfy</h3>;
  }
  if (user && isServey) {
    return children;
  }
  return <Navigate to="/" state={{ from: locatoin }} replace></Navigate>;
};

export default ServayRoutes;
