/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { AuthContext } from "../AuthProvider/Provider";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const SocalLogin = () => {
  const { googleSignin } = useContext(AuthContext);
  const navigate = useNavigate();
  const locatoin = useLocation();
  const axiosPublic = UseAxiosPublic();

  const from = locatoin.state?.from?.pathname || "/";

  const handelGoogleSignIn = () => {
    googleSignin().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
      });
      Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
      navigate(from, { replace: true });
    });
  };
  return (
    <div className="px-8 ">
      <button
        onClick={handelGoogleSignIn}
        className="btn btn-primary w-full mb-5"
      >
        Login with
        <FaGoogle className="mr-5"></FaGoogle>
      </button>
    </div>
  );
};

export default SocalLogin;
