/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosHoks from "../../../Hooks/UseAxiosHoks";

const AllUsers = () => {
  const axiosSecure = UseAxiosHoks();
  const [filter, setFilter] = useState("");
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?filter=${filter}`);
      console.log(filter);
      console.log(res.data);
      return res.data;
    },
  });
  const handelChange = (e) => {
    setFilter(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    refetch();
  };
  // make admin
  const handelMakeAdmin = (user) => {
    axiosSecure.patch(`users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: `${user.name} is an Admin now`,
          text: "Your file has been update.",
        });
      }
    });
  };
  // make servay
  const handelMakeServey = (user) => {
    axiosSecure.patch(`users/Servey/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: `${user.name} is an Dervay now`,
          text: "Your file has been updated.",
        });
      }
    });
  };
  // user delete
  const handelDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "This user  has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-3xl">All user</h2>
        <h2 className="text-3xl">Total users:{users.length}</h2>
        <form onSubmit={handelSubmit}>
          <label className="lavel">
            <span>Filter by</span>
          </label>
          <div className="flex gap-4">
            <select
              onChange={handelChange}
              className="select flex-1 select-border"
              defaultValue={filter}
            >
              <option value="">All</option>
              <option value="ProUser">pro User </option>
              <option value="Servey">Serveyor</option>
              <option value="admin">admin</option>
            </select>
            <button className="" type="submit">
              filter
            </button>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>servay </th>
              <th>prouser </th>
              <th>Actoin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handelMakeAdmin(user)}
                      className="btn btn-ghost btn-lg text-red-600"
                    >
                      <FaUsers></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "Servey" ? (
                    "Serveyor"
                  ) : (
                    <button
                      onClick={() => handelMakeServey(user)}
                      className="btn btn-ghost btn-lg text-red-600"
                    >
                      <FaUsers></FaUsers>
                    </button>
                  )}
                </td>
                <td> {user.role} </td>
                <td>
                  <button
                    onClick={() => handelDelete(user)}
                    className="btn btn-ghost btn-lg text-red-600"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>

                <th>
                  <button className="btn btn-ghost btn-lg text-red-600"></button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
