/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaMoneyCheck, FaPen, FaPoll, FaUser } from "react-icons/fa";
import UseAdmin from "../Hooks/UseAdmin";
import UseServay from "../Hooks/UseServay";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { MdRateReview, MdReviews } from "react-icons/md";
import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";
import { SiSimpleanalytics } from "react-icons/si";

const DashBord = () => {
  const [isAdmin] = UseAdmin()
  const [isServey] = UseServay();
  const {logout} = UseAuth()
  const handelSignout = () => {
    logout()
      .then(() => {
        // logut was successful
        Swal.fire({
          icon: "success",
          title: "wow great your logout",
        });
      })
      .catch((error) => {
        // An error occurred during logout
        Swal.fire({
          icon: "error",
          title: "oops",
          text: error.message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };
  // const isAdmin = true;
  // const isServey = true;
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-64 min-h-screen bg-[#FCF3DD]">
        <ul className="menu p-4 ">
          {isAdmin && (
            <>
              <h2 className="text-3xl text-center">
                Admin <br />
                <span className="text-[20px]">D a s h b o a r d</span>
              </h2>
              <li className="flex items-center gap-2 mt-10">
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
                <NavLink to="/dashboard/survey">
                  Manage survey <FaPoll></FaPoll>
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
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/Adminanalytic">
                  Analyticks
                  <SiSimpleanalytics></SiSimpleanalytics>
                </NavLink>
              </li>
            </>
          )}

          {isServey && (
            <>
              <h2 className="text-3xl text-center">
                Surveyor <br />
                <span className="text-[20px]">D a s h b o a r d</span>
              </h2>

              <li className="flex items-center gap-2 mt-10">
                <NavLink to="/dashboard/servayCreate">
                  Survey Creation �<FaPen></FaPen>
                </NavLink>
              </li>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/myservey">
                  My Servay <FaPoll></FaPoll>
                </NavLink>
              </li>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/AdminFeadback">
                  Admin Feadback <MdReviews></MdReviews>
                </NavLink>
              </li>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/userfeedback">
                  User feedback <MdRateReview />{" "}
                </NavLink>
              </li>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/userResponse">User Response</NavLink>
              </li>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashboard/serveyoranalytic">
                  Analyticks
                  <SiSimpleanalytics></SiSimpleanalytics>
                </NavLink>
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
          <div className="divider"></div>
          <li className="flex items-center gap-2 ">
            <NavLink to="/dashboard/profile">
              Profile <CgProfile />
            </NavLink>
          </li>
          <li className="flex items-center gap-2 ">
            <NavLink onClick={handelSignout} to="/">
              logout <TbLogout />
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
