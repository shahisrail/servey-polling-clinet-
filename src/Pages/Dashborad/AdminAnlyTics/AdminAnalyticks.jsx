/* eslint-disable no-unused-vars */
import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaVoteYea } from "react-icons/fa";
import UseServayIteams from "../../../Hooks/UseServayIteams";

const AdminAnalyticks = () => {
  const [servay] = UseServayIteams();

  // Sort the servay array based on 'like' and 'dislike'
  const sortedByLikes = [...servay].sort((a, b) => b.like - a.like);
  const sortedByDislikes = [...servay].sort((a, b) => b.dislike - a.dislike);

  // Get the most liked and disliked survey from the sorted arrays
  const mostLiked = sortedByLikes.length > 0 ? sortedByLikes[0] : null;
  const mostDisliked = sortedByDislikes.length > 0 ? sortedByDislikes[0] : null;

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {mostLiked && (
          <div className="max-w-sm p-6 bg-slate-100 border rounded-lg shadow">
            <h5 className="mb-2 text-2xl font-bold text-gray-900">
              Most Liked Survey
            </h5>
            <p className="mb-3 text-gray-700">Category: {mostLiked.category}</p>
            <p className="mb-3 text-gray-700">Title: {mostLiked.titale}</p>
            <div className="flex gap-4">
              <div className="flex items-center">
                <AiFillLike className="text-xl text-blue-700" />
                <span className="text-gray-700">{mostLiked.like}</span>
              </div>
              <div className="flex items-center">
                <AiFillDislike className="text-xl text-blue-700" />
                <span className="text-gray-700">{mostLiked.dislike}</span>
              </div>
              <div className="flex items-center">
                <FaVoteYea className="text-xl" />
                <span className="text-gray-700">{mostLiked.yesVoted}</span>
              </div>
            </div>
          </div>
        )}
        {mostDisliked && (
          <div className="max-w-sm p-6 bg-slate-100 border rounded-lg shadow">
            <h5 className="mb-2 text-2xl font-bold text-gray-900">
              Most Disliked Survey
            </h5>
            <p className="mb-3 text-gray-700">
              Category: {mostDisliked.category}
            </p>
            <p className="mb-3 text-gray-700">Title: {mostDisliked.titale}</p>
            <div className="flex gap-4">
              <div className="flex items-center">
                <AiFillLike className="text-xl text-blue-700" />
                <span className="text-gray-700">{mostDisliked.like}</span>
              </div>
              <div className="flex items-center">
                <AiFillDislike className="text-xl text-blue-700" />
                <span className="text-gray-700">{mostDisliked.dislike}</span>
              </div>
              <div className="flex items-center">
                <FaVoteYea className="text-xl" />
                <span className="text-gray-700">{mostDisliked.yesVoted}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAnalyticks;
