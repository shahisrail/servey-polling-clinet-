// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import Axios for making HTTP requests
// import UseAxiosHoks from "../../../Hooks/UseAxiosHoks";

// const AllServayResponse = () => {
//   const [responseData, setResponseData] = useState([]);
//   const [totalVotes, setTotalVotes] = useState(0);
//   const axiosSecure = UseAxiosHoks()

//   useEffect(() => {
//     // Fetch data from the backend when the component mounts
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axiosSecure.get("/responseItem"); // Make a GET request to the backend endpoint
//       const { detailInformatoin, totalVotes } = response.data;
//       setResponseData(detailInformatoin);
//       setTotalVotes(totalVotes);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Total Votes: {totalVotes}</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Question</th>
//             <th>Report</th>
//             <th>Survey ID</th>
//           </tr>
//         </thead>
//         <tbody>
//           {responseData.map((data, index) => (
//             <tr key={index}>
//               <td>{data.name}</td>
//               <td>{data.email}</td>
//               <td>{data.question}</td>
//               <td>{data.report}</td>
//               <td>{data.surveyId}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllServayResponse;

/* eslint-disable no-unused-vars */

import React from "react";
import { useState } from "react";
import { FaVoteYea } from "react-icons/fa";
import { VscCheck, VscChromeClose } from "react-icons/vsc";
import UseSerbayDetails from "../../../Hooks/UseSerbayDetails";
import UseAxiosHoks from "../../../Hooks/UseAxiosHoks";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router-dom";

const AllServayResponse = () => {
  const [servayAdmin, loading, refetch] = UseSerbayDetails();


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
              <th className="border">email</th>
              <th className="border">Category</th>
              <th className="border">Titale</th>
              <th className="border">Descriptoin </th>
              <th className="border">Response </th>
            </tr>
          </thead>

          <tbody className="border">
            {servayAdmin.map((item, index) => (
              <tr className="border" key={item._id}>
                <th className="border">{index + 1} </th>
                <td className="border">
                  <div className="flex items-center gap-3">
                    <div className="">{item.email}</div>
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center gap-3">
                    <div className="">{item.category}</div>
                  </div>
                </td>
                <td className="border"> {item.titale} </td>
                <td className="border"> {item.Descriptoin} </td>
                <td className="border">
                  <Link to={`/dashboard/response/${item._id}`}>
                    <button> Show response</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllServayResponse;
