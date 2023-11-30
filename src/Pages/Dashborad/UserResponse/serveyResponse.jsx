/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import UseAxiosHoks from "../../../Hooks/UseAxiosHoks";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ServeyResponse = () => {
  const [responseData, setResponseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const axiosSecure = UseAxiosHoks();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get(`/servayvoted/${id}`);
        //  const response = await axiosSecure.get(`/servayvoted`);
        setResponseData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [axiosSecure, id]);
  const handleButtonClick = (item) => {
    Swal.fire({
      text: `${item?.report}`,
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
      <div className="overflow-x-auto">
        {isLoading ? (
          <p>Loading...</p>
        ) : responseData.length === 0 ? (
          <p>No votes yet</p>
        ) : (
          <table className="table">
            {/* head */}
            <thead className="border">
              <tr className="border">
                <th className="border">#</th>
                <th className="border ">email</th>
                <th className="border">Name</th>
                <th className="border">Time</th>
                <th className="border">vote</th>
                <th className="border">Feadback</th>
              </tr>
            </thead>

            <tbody className="border">
              {responseData.map((item, index) => (
                <tr className="border" key={item._id}>
                  <th className="border">{index + 1} </th>
                  <td className="border">
                    <div className="flex items-center gap-3 ">
                      <div className="">{item.email}</div>
                    </div>
                  </td>
                  <td className="border">
                    <div className="flex items-center gap-3">
                      <div className="">{item.name}</div>
                    </div>
                  </td>
                  <td className="border"> {item.time} </td>
                  <td className="border"> {item.question} </td>
                  {/* <td className="border"> {item.report} </td> */}
                  <td className="border">
                  <button onClick={() => handleButtonClick(item)}>
                  show user Feadback
                  </button>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ServeyResponse;
