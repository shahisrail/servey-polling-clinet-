import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React from 'react';



const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
});
const UseAxiosPublic = () => {
  return axiosPublic
};

export default UseAxiosPublic;