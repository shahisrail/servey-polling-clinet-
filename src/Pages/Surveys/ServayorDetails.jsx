/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaVoteYea } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import UseAxiosHoks from "../../Hooks/UseAxiosHoks";
import UseAuth from "../../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ServayorComment from "./ServayorComment";
import axios from "axios";
import CommnetCollectoin from "./CommnetCollectoin";
import UseAdmin from "../../Hooks/UseAdmin";
import UseServay from "../../Hooks/UseServay";

const ServayorDetails = () => {
  const { user } = UseAuth();
  const [isAdmin] = UseAdmin();
  const [isServayor] = UseServay();
  const surveys = useLoaderData();
  const { register, handleSubmit } = useForm();
  // Assuming this returns an array of survey objects
  const axiosSecure = UseAxiosHoks();

  const [comment, setComment] = useState([]);
  const [getID, setGetID] = useState(false);

  const isExpired = (expirationDate) => {
    const currentDate = new Date();
    const expDate = new Date(expirationDate);

    return currentDate > expDate;
  };

  const onSubmit = async (data) => {
    console.log(data);

    //  now send the servay   data to the server

    const addComment = {
      email: data.email,
      name: data.name,
      question: data.question,
      report: data.report,
      surveyId: data.surveyId,
    };
    const servayRes = await axiosSecure.post(
      `/addComment?id=${data.surveyId}`,
      addComment
    );

    if (servayRes.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your vote is submitted",
        showConfirmButton: false,
        timer: 1500,
      });

      localStorage.setItem("survey_id", data.surveyId);
      setGetID(true);
    }
  };

  const handleLike = (_id, currentLikeCount) => {
    const existingLike = localStorage.getItem(`like_${_id}`) || "false";

    if (existingLike === "true") {
      // If 'like' value is true in localStorage, do not increment the count
      return;
    }

    const updatedLikeCount = currentLikeCount + 1;

    localStorage.setItem(`like_${_id}`, "true");

    axiosSecure
      .patch(`/allSurvey/like/${_id}`, { like: updatedLikeCount })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const handleDislike = (_id, currentDislikeCount) => {
    const existingDislike = localStorage.getItem(`dislike_${_id}`) || "false";

    if (existingDislike === "true") {
      // If 'dislike' value is true in localStorage, do not increment the count
      return;
    }

    const updatedDislikeCount = currentDislikeCount + 1;

    localStorage.setItem(`dislike_${_id}`, "true");

    axiosSecure
      .patch(`/allSurvey/dislike/${_id}`, { dislike: updatedDislikeCount })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  /* loaded comment datqa  */
  useEffect(() => {
    fetch("http://localhost:5000/commentdata")
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);
  console.log(comment);
  /* pollColectoin data  fething  user email macth  */

  return (
    <div>
      <div>
        {surveys.map((survey) => (
          <div
            key={survey._id}
            className=" w-4/5 text-center mx-auto min-h-[20vh] p-6 z-10 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Category: {survey.category}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Titale: {survey.titale}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Decriptoin: {survey.Descriptoin}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Dedline: {survey.Dedline}
            </p>
            <div className="flex justify-center flex-row gap-10">
              <div className="badge">
                <button
                  className="w-full h-full flex justify-center items-center py-5 text-2"
                  onClick={() => handleLike(survey._id, survey.like)}
                >
                  <AiFillLike className="text-2xl text-blue-700"> </AiFillLike>
                  {survey.like + 0}
                </button>
              </div>

              <div className="badge">
                <button
                  className="w-full h-full flex justify-center items-center py-5 text-2"
                  onClick={() => handleDislike(survey._id, survey.dislike)}
                >
                  <AiFillDislike className="text-2xl text-red-700"></AiFillDislike>
                  {survey.dislike + 0} <br />
                </button>
              </div>

              <div className="flex">
                {" "}
                <FaVoteYea className="text-2xl "></FaVoteYea> {survey.yesVoted}
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit(onSubmit, survey)}>
                <div className="flex gap-10">
                  <input
                    type="hidden"
                    value={survey._id}
                    {...register("surveyId")}
                  />

                  <div className="form-control w-full my-6 ">
                    <label className="label">
                      <span className="label-text">User Email</span>
                    </label>
                    <input
                      type="email"
                      defaultValue={user?.email}
                      readOnly
                      placeholder="User Email"
                      {...register("email", { required: true })}
                      className="input input-bordered w-full "
                    />
                  </div>
                  <div className="form-control w-full my-6 ">
                    <label className="label">
                      <span className="label-text">User Name</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.displayName}
                      readOnly
                      placeholder="User Name"
                      {...register("name", { required: true })}
                      className="input input-bordered w-full "
                    />
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="form-control w-full my-6 ">
                    <label className="label">
                      <span className="label-text">
                        question {survey.qutoin}{" "}
                      </span>
                    </label>

                    <label className="label">
                      <span className="label-text">Yes</span>
                    </label>

                    <input
                      type="radio"
                      name="radio-5"
                      value="yes"
                      className="radio radio-success"
                      {...register("question", { required: true })}
                    />
                    <label className="label ">
                      <span className="label-text">No</span>
                    </label>
                    <input
                      type="radio"
                      name="radio-5"
                      value="no"
                      className="radio radio-success"
                      {...register("question", { required: true })}
                    />
                  </div>
                  <div className="form-control w-full my-6 ">
                    <label className="label">
                      <span className="label-text">User report</span>
                    </label>
                    <input
                      type="text"
                      placeholder="User report"
                      {...register("report")}
                      className="input input-bordered w-full "
                    />
                  </div>
                </div>

                {getID ? (
                  <button type="submit" className="btn mt-5" disabled>
                    You have already voted
                  </button>
                ) : isAdmin ? (
                  <button type="submit" className="btn mt-5" disabled>
                    You are an admin. Do not submit.
                  </button>
                ) : isServayor ? (
                  <button type="submit" className="btn mt-5" disabled>
                    You are a surveyor. Do not vote.
                  </button>
                ) : isExpired(survey.Dedline) ? (
                  <button type="submit" className="btn mt-5" disabled>
                    Time is expired
                  </button>
                ) : (
                  <button type="submit" className="btn mt-5">
                    Submit your poll
                  </button>
                )}
              </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              {comment
                .filter((data) => data.surveyId === survey._id)
                .map((filteredData) => (
                  <CommnetCollectoin
                    key={filteredData._id}
                    data={filteredData}
                  ></CommnetCollectoin>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <ServayorComment></ServayorComment>
      </div>
    </div>
  );
};

export default ServayorDetails;
