// /* eslint-disable no-unused-vars */
// import React from 'react';

// const AdminFEadback = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default AdminFEadback;






/* eslint-disable no-unused-vars */
import React from "react";
import MyservayHok from "../../../Hooks/MyservayHok";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const AdminFEadback = () => {
  const [MyServay] = MyservayHok();
  const handleButtonClick = (item) => {
    Swal.fire({
      text: `${item?.message}`,
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
  };
  return (
    <div>
      <div className=" ">
        <h2>length:{MyServay.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border">
              <th className="border">Sl</th>
              <th className="border">Category</th>
              <th className="border">Titale</th>
              <th className="border">Descriptoin </th>
              <th className="border">Update</th>
            </tr>
          </thead>

          <tbody className="border">
            {MyServay.map((item, index) => (
              <tr className="border" key={item._id}>
                <th className="border">{index + 1} </th>
                <td className="border">
                  <div className="flex items-center gap-3">
                    <div className="">{item.category}</div>
                  </div>
                </td>
                <td className="border"> {item.titale} </td>
                <td className="border"> {item.Descriptoin} </td>
                <td className="border">
                  <button onClick={() => handleButtonClick(item)}>
                    {item.status}
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

export default AdminFEadback;
