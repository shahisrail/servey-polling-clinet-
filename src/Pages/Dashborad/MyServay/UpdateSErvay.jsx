/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosHoks from "../../../Hooks/UseAxiosHoks";
import { useForm } from "react-hook-form";

const UpdateSErvay = () => {
  const { titale, category, Dedline, Descriptoin, _id } = useLoaderData();

  const { user } = UseAuth();
  const { register, handleSubmit } = useForm();
  const axiosSecure = UseAxiosHoks();
  const onSubmit = async (data) => {
    console.log(data);

    //  now send the servay   data to the server

    const servayIteam = {

      category: data.category,
      titale: data.titale,
      Descriptoin: data.Descriptoin,
      Dedline: data.Dedline,
    };
    const servayRes = await axiosSecure.patch(`/myServay/${_id}`, servayIteam);
    console.log(servayRes.data);
    if (servayRes.data.modifiedCount > 0) {
      // show  success popup
      // reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.category} is updates to the servay`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <div className="w-1/2 mx-auto min-h-screen">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              readOnly
              placeholder="User Email"
              {...register("email", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-5">
            {/* titale  */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Titale</span>
              </label>
              <input
                type="text"
                defaultValue={titale}
                placeholder="titale"
                {...register("titale", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
            {/* category  */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="SocialIssuesSurveys">
                  Social Issues Surveys
                </option>
                <option value="TechnologyUse">Technology Use</option>
                <option value="WebsiteUsability">Website Usability</option>
                <option value="EducationalSurveys">Educational Surveys</option>
                <option value="HealthcareFeedback">Healthcare Feedback</option>
              </select>
            </div>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Dedline</span>
            </label>
            <input
              type="date"
              defaultValue={Dedline}
              placeholder="Dedline"
              {...register("Dedline", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          {/*  servay Descriptoins  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Descriptoin</span>
            </label>
            <textarea
              defaultValue={Descriptoin}
              {...register("Descriptoin", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>

          <button type="submit" className="btn mt-5">
            Update servay
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateSErvay;
