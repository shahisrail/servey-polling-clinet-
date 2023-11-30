/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import UseAxiosHoks from "../../../Hooks/UseAxiosHoks";
import { Link, useParams } from "react-router-dom";

const Response = () => {
  const [responseData, setResponseData] = useState([]);

  const axiosSecure = UseAxiosHoks();
  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get(`/servayvoted/${id}`);
        //  const response = await axiosSecure.get(`/servayvoted`);
        setResponseData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [axiosSecure, id]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border">
              <th className="border">#</th>
              <th className="border">email</th>
              <th className="border">Name</th>
              <th className="border">Time</th>
              <th className="border">vote</th>
            </tr>
          </thead>

          <tbody className="border">
            {responseData.map((item, index) => (
              <tr className="border" key={item._id}>
                <th className="border">{index + 1} </th>
                <td className="border">
                  <div className="flex items-center gap-3">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Response;
