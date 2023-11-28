/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = UseAuth();
   const locatoin = useLocation();
   console.log(locatoin);
   if (loading) {
     return (
       <div className="mx-auto">
         <img
           src="https://i.ibb.co/qWRYqKH/tumblr-n71kcn1ch11ttqncoo1-500.webp"
           alt=""
         />
       </div>
     );
   }
   if (user) {
     return children;
   }
   return <Navigate state={locatoin.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
