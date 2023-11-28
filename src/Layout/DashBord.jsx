/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaMoneyCheck, FaPen, FaUser } from "react-icons/fa";
import UseAdmin from "../Hooks/UseAdmin";
import UseServay from "../Hooks/UseServay";
const DashBord = () => {
  const [isAdmin] = UseAdmin()
  const [isServey] = UseServay();
  // const isAdmin = true;
  // const isServey = true;
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#FCF3DD]">
        <ul className="menu p-4 ">
          {isAdmin && (
            <>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/adminHome">
                  Admin Home<FaHome></FaHome>
                </NavLink>
              </li>
              {/* <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/servayCreate">
                  add Survey Creation <FaPen></FaPen>
                </NavLink>
              </li> */}
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/allUser">
                  Manage users <FaUser></FaUser>
                </NavLink>
              </li>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/payments">
                  payments <FaMoneyCheck></FaMoneyCheck>
                </NavLink>
              </li>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/survey">
                  Manage survey <FaMoneyCheck></FaMoneyCheck>
                </NavLink>
              </li>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/history">
                  Payment History <FaMoneyCheck></FaMoneyCheck>
                </NavLink>
              </li>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/Allresponse">
                  ALl servay Response <FaMoneyCheck></FaMoneyCheck>
                </NavLink>
              </li>
            </>
          )}

          {isServey && (
            <>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/servayCreate">
                  Survey Creation �<FaPen></FaPen>
                </NavLink>
              </li>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/myservey">My Servay</NavLink>
              </li>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/AdminFeadback">Admin Feadback</NavLink>
              </li>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/userfeedback">User feedback</NavLink>
              </li>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/userReport">User report</NavLink>
              </li>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/userResponse">User Response</NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>

          {/* shared navlinks */}
          <li className="flex items-center gap-2 ">
            <NavLink to="/">
              Home<FaHome></FaHome>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 bg-[#FFFDFA]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBord;
