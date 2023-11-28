/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import UseAxiosHoks from "../../../Hooks/UseAxiosHoks";

const AllServayResponse = () => {
  const [responseData, setResponseData] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);
  const axiosSecure = UseAxiosHoks()

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosSecure.get("/responseItem"); // Make a GET request to the backend endpoint
      const { detailInformatoin, totalVotes } = response.data;
      setResponseData(detailInformatoin);
      setTotalVotes(totalVotes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>Total Votes: {totalVotes}</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Question</th>
            <th>Report</th>
            <th>Survey ID</th>
          </tr>
        </thead>
        <tbody>
          {responseData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.question}</td>
              <td>{data.report}</td>
              <td>{data.surveyId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllServayResponse;
