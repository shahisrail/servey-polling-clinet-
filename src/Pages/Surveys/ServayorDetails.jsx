/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaVoteYea } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import UseAxiosHoks from "../../Hooks/UseAxiosHoks";
import UseAuth from "../../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ServayorComment from "./ServayorComment";

const ServayorDetails = () => {
  const surveys = useLoaderData();
  const { register, handleSubmit } = useForm(); // Assuming this returns an array of survey objects
  const axiosSecure = UseAxiosHoks();
  const { user } = UseAuth();
  const onSubmit = async (data, surveyId) => {
    console.log(data);

    //  now send the servay   data to the server

    const addComment = {
      email: data.email,
      name: data.name,
      question: data.question,
      report: data.report,
      surveyId: data.surveyId,
    };
    const servayRes = await axiosSecure.post("/addComment", addComment);
    //  const servayRes = await axiosSecure.post(
    //    `/addComment/${surveyId}`,
    //    addComment
    //  );
    console.log(servayRes.data);
    if (servayRes.data.insertedId) {
      // show  success popup
      // reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "your vote is submited",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleLike = (_id, currentLikeCount) => {
    const updatedLikeCount = currentLikeCount + 1;

    axiosSecure
      .patch(`/allSurvey/like/${_id}`, { like: updatedLikeCount })
      .then((res) => {
        // Handle success or show a message to the user
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const handleDislike = (_id, currentDislikeCount) => {
    const updatedDislikeCount = currentDislikeCount + 1;

    axiosSecure
      .patch(`/allSurvey/dislike/${_id}`, { dislike: updatedDislikeCount })
      .then((res) => {
        // Handle success or show a message to the user
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  //   e.preventDefault();
  //   const form = e.target;
  //   const email =
  //   const name = user.displayName;
  //   const comment = form.comment;
  //   const fromData = { email, comment, name };
  //   console.log(fromData);
  // };

  return (
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
          <div className="flex justify-center flex-row gap-10">
            <div className="badge">
              <button
                className="w-full h-full flex justify-center items-center py-5 text-2"
                onClick={() => handleLike(survey._id,survey.like)}
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

            <div>
              <input
                type="radio"
                name="radio-5"
                className="radio radio-success"
                checked
              />
              <input
                type="radio"
                name="radio-5"
                className="radio radio-success"
              />
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
                    <span className="label-text">question</span>
                  </label>
                  <input
                    type="radio"
                    name="radio-5"
                    value="yes"
                    className="radio radio-success"
                    checked
                    {...register("question", { required: true })}
                  />
                  <input
                    type="radio"
                    name="radio-5"
                    value="no"
                    className="radio radio-success"  
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
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">comment</span>
                </label>
                <textarea
                  type="text"
                  placeholder="comment"
                  {...register("comment", { required: true })}
                  className="textarea textarea-bordered h-24"
                />
              </div>

              <button type="submit" className="btn mt-5">
                Submit comment
              </button>
            </form>
          </div>
        </div>
      ))}
      <div>
        <ServayorComment></ServayorComment>
      </div>
    </div>
  );
};

export default ServayorDetails;
