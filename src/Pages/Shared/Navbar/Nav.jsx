import { useContext } from "react";
// import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/Provider";
import UseAdmin from "../../../Hooks/UseAdmin";
import UseServay from "../../../Hooks/UseServay";

const Nav = () => {
  const [isAdmin] = UseAdmin()
  const [isServay] = UseServay()
  console.log(isAdmin);
  console.log(isServay);
  const { user, logout } = useContext(AuthContext);
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

  const userimg =
    user && user.photoURL
      ? user.photoURL
      : "https://i.postimg.cc/jd2TMBgB/download.png";

  const useName = user && user.displayName;

  const navLinks = (
    <>
      <li className="">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="">
        <NavLink to="/about">About Us</NavLink>
      </li>
      {isAdmin && (
        <li>
          <Link to="/dashboard/allUser">Admin Dashboard</Link>
        </li>
      )}
      {isServay && (
        <li>
          <Link to="/dashboard/servayCreate"> Servay Dashboard</Link>
        </li>
      )}

      <li>
        <NavLink to="/Surveys">Surveys</NavLink>
      </li>

      <li>
        <NavLink to="/Pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="/Contact">Contact</NavLink>
      </li>

      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-opacity-30  text-black ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div>
          <Link to="/">
            {/* <img
              className="w-[200px] h-[50px] hidden md:block  "
              src="https://i.ibb.co/LnyF4B3/Untitled-design-1.png"
              alt=""
            /> */}
          </Link>
        </div>
        <a className="normal-case lg:text-xl">Polling and Survey</a>
        <div></div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <h1> {useName} </h1>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={userimg} alt="" />
          </div>
        </label>
        {user ? (
          <>
            <button
              onClick={handelSignout}
              className="btn bg-balck  font-bold w-[70px] lg:w-[120px] hover:bg-[#0E204D] text-white "
            >
              Sign out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn text-white font-bold bg-[#62C8BA] hover:bg-[#0E204D]">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
