/* eslint-disable no-unused-vars */

import React from "react";
import { useState } from "react";
import { AiFillDislike, AiFillLike, AiTwotoneLike } from "react-icons/ai";
import { FaVoteYea } from "react-icons/fa";
import { VscCheck, VscChromeClose } from "react-icons/vsc";
import UseSerbayDetails from "../../../Hooks/UseSerbayDetails";
import UseAxiosHoks from "../../../Hooks/UseAxiosHoks";
import Swal from "sweetalert2";

const Servayadmin = () => {
  const [servayAdmin, refetch] = UseSerbayDetails();
  const axiosSecure = UseAxiosHoks();

  const handlePublisetatus = async (id, status) => {
    try {
      const response = await axiosSecure.patch(`/servayAdmin/${id}`, {
        status,
      });
      console.log(response.data);
      refetch();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  
 const handleUnPublisetatus = async (id, status) => {
   try {
     const { value: enteredMessage } = await Swal.fire({
       title: "Are you sure?",
       input: "text",
       inputPlaceholder: "Type your message",
       text: "You won't be able to revert this!",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Confirm",
     });

     if (enteredMessage) {
       const response = await axiosSecure.put(`/servayAdmin/${id}`, {
         status,
         enteredMessage,
       });
       console.log(response.data);
      //  refetch();

       Swal.fire({
         title: "Updated!",
         text: "Your status has been updated.",
         icon: "success",
       });
     } else {
       Swal.fire("Message is required!", "", "error");
     }
   } catch (error) {
     console.error("Error updating status:", error);
   }
 };

 
  const getStatusIcon = (status) => {
    if (status === "Published") {
      return <VscCheck />;
    }
    
  };
  const getStatusIcon2 = (status) => {
    if (status === "UnPublished") {
      return <VscChromeClose />;
    }
    
  };

  return (
    <div>
      <div className=" ">
        <h2>length:{servayAdmin.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border">
              <th className="border">#</th>
              <th className="border">Category</th>
              <th className="border">Titale</th>
              <th className="border">Descriptoin </th>
              <th className="border">sataus</th>
              <th className="border">sataus</th>
            </tr>
          </thead>

          <tbody className="border">
            {servayAdmin.map((item, index) => (
              <tr className="border" key={item._id}>
                <th className="border">{index + 1} </th>
                <td className="border">
                  <div className="flex items-center gap-3">
                    <div className="">{item.category}</div>
                  </div>
                </td>
                <td className="border"> {item.titale} </td>
                <td className="border"> {item.titale} </td>
                <td className="border">
                  {item.status !== "Published" && (
                    <button
                      onClick={() => handlePublisetatus(item._id, "Published")}
                    >
                      {item.status}
                    </button>
                  )}
                  {getStatusIcon(item.status)}
                </td>

                <td className="border">
                  <button>
                    {item.status !== "UnPublished" && (
                      <button
                        onClick={() =>
                          handleUnPublisetatus(item._id, "UnPublished")
                        }
                      >
                        UnPublished
                      </button>
                    )}
                    {getStatusIcon2(item.status)}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Servayadmin;
