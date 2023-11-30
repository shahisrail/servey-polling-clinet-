/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Pages/Shared/Navbar/Nav';
import Foter from '../Pages/foter/foter';
// import foter '../Pages/foter/foter.jsx'
const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Foter></Foter>
 
    </div>
  );
};

export default Main;