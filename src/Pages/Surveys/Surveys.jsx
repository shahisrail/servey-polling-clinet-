/* eslint-disable no-unused-vars */
import React from "react";

import { AiFillDislike, AiFillLike, AiTwotoneLike } from "react-icons/ai";
import { FaVoteYea } from "react-icons/fa";

import UseServayIteams from "../../Hooks/UseServayIteams";

const Surveys = () => {
  const [servay] = UseServayIteams();

  return (
    <div>
      <div className=" ">
        <h2>length:{servay.length}</h2>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-5">
        {servay.map((item) => (
          <div
            key={item._id}
            className="max-w-sm min-h-[20vh] p-6 z-10 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Category: {item.category}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Titale: {item.titale}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.Descriptoin}
            </p>{" "}
            <div className="flex flex-row gap-10">
              <div className="badge">
                <AiFillLike className="text-2xl text-blue-700"> </AiFillLike>
                {item.like} <br />
              </div>

              <div className="badge">
                <AiFillDislike className="text-2xl text-blue-700"></AiFillDislike>
                {item.dislike}
              </div>
              <div className="badge">
                <FaVoteYea className="text-2xl "></FaVoteYea>
                {item.yesVoted}
              </div>
            </div>
            <button className="btn w-full mt-5">Servay Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Surveys;
