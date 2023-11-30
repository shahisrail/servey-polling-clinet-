import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React from "react";

const axiosPublic = axios.create({
  baseURL: "https://assaignment-12-server-seven.vercel.app",
});
const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
