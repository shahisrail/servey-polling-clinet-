/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { AiFillDislike, AiFillLike, AiTwotoneLike } from "react-icons/ai";
import { FaVoteYea } from "react-icons/fa";

import UseServayIteams from "../../Hooks/UseServayIteams";
import { Link } from "react-router-dom";

const Surveys = () => {
  const [servay] = UseServayIteams();
  const [serch, setSerche] = useState("");
  const handelOnchange = (e) => {
    e.preventDefault();
    const formData = e.target.value;
    const output = formData.toLowerCase();
    setSerche(output);
  };
  console.log(serch);
  return (
    <div>
      <div className=" ">
        <h2>length:{servay.length}</h2>
      </div>
      <form onChange={handelOnchange}>
        <input className="border" type="text" name="serch" />
      </form>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5">
        {servay
          .filter((surveyFilter) => {
            return serch === ""
              ? true
              : (surveyFilter.titale &&
                  surveyFilter.titale.toLowerCase().includes(serch)) ||
                  (surveyFilter.category &&
                    surveyFilter.category.toLowerCase().includes(serch)); // Corrected line
          })
          .map(
            ({
              _id,
              category,
              titale,
              Descriptoin,
              like,
              dislike,
              yesVoted,
            }) => (
              <div
                key={_id}
                className="max-w-sm min-h-[20vh] p-6 z-10 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Category: {category}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Titale: {titale}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {Descriptoin}
                </p>{" "}
                <div className="flex flex-row gap-10">
                  <div className="badge">
                    <AiFillLike className="text-2xl text-blue-700">
                      {" "}
                    </AiFillLike>
                    {like} <br />
                  </div>

                  <div className="badge">
                    <AiFillDislike className="text-2xl text-blue-700"></AiFillDislike>
                    {dislike}
                  </div>
                  <div className="badge">
                    <FaVoteYea className="text-2xl "></FaVoteYea>
                    {yesVoted}
                  </div>
                </div>
                <Link to={`/SurveyorDetails/${_id}`}>
                  {/* <Link to={`/SurveyorDetails/_id}`}> */}
                  <button className="btn w-full mt-5">Servay Details</button>
                </Link>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Surveys;
