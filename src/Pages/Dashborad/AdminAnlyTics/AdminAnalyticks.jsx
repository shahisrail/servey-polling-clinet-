import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import UseServayIteams from "../../../Hooks/UseServayIteams";
import { FaVoteYea } from "react-icons/fa";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const COLORS = ["#0088FE", "#FF8042", "#00C49F"]; // Colors for liked, disliked, and most voted sections

const AdminAnalyticks = () => {
  const [servay] = UseServayIteams();

  // Sort the servay array based on 'like', 'dislike', and 'yesVoted'
  const sortedByLikes = [...servay].sort((a, b) => b.like - a.like);
  const sortedByDislikes = [...servay].sort((a, b) => b.dislike - a.dislike);
  const sortedByVotes = [...servay].sort((a, b) => b.yesVoted - a.yesVoted);

  // Get the most liked, most disliked, and most voted survey from the sorted arrays
  const mostLiked = sortedByLikes.length > 0 ? sortedByLikes[0] : null;
  const mostDisliked = sortedByDislikes.length > 0 ? sortedByDislikes[0] : null;
  const mostVoted = sortedByVotes.length > 0 ? sortedByVotes[0] : null;

  // Create data array for Pie Chart
  const data = [
    { name: "Most Liked", value: mostLiked ? mostLiked.like : 0 },
    { name: "Most Disliked", value: mostDisliked ? mostDisliked.dislike : 0 },
    { name: "Most Voted", value: mostVoted ? mostVoted.yesVoted : 0 },
  ];
  const total = data.reduce((acc, entry) => acc + entry.value, 0);

  return (
    <div>
      <h2 className="text-2xl text-center">
        All survey Most liked, disliked, and most voted
      </h2>
      <div className="p-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {mostLiked && (
            <div className=" p-6 bg-slate-100 border rounded-lg shadow">
              <h5 className="mb-2 text-2xl font-bold text-gray-900">
                Most Liked Survey
              </h5>
              <p className="mb-3 text-gray-700">
                Category: {mostLiked.category}
              </p>
              <p className="mb-3 text-gray-700">Title: {mostLiked.title}</p>
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
            <div className=" p-6 bg-slate-100 border rounded-lg shadow">
              <h5 className="mb-2 text-2xl font-bold text-gray-900">
                Most Disliked Survey
              </h5>
              <p className="mb-3 text-gray-700">
                Category: {mostDisliked.category}
              </p>
              <p className="mb-3 text-gray-700">Title: {mostDisliked.title}</p>
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
          {mostVoted && (
            <div className=" p-6 bg-slate-100 border rounded-lg shadow">
              <h5 className="mb-2 text-2xl font-bold text-gray-900">
                Most Voted Survey
              </h5>
              <p className="mb-3 text-gray-700">
                Category: {mostVoted.category}
              </p>
              <p className="mb-3 text-gray-700">Title: {mostVoted.title}</p>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <AiFillLike className="text-xl text-blue-700" />
                  <span className="text-gray-700">{mostVoted.like}</span>
                </div>
                <div className="flex items-center">
                  <AiFillDislike className="text-xl text-blue-700" />
                  <span className="text-gray-700">{mostVoted.dislike}</span>
                </div>
                <div className="flex items-center">
                  <FaVoteYea className="text-xl" />
                  <span className="text-gray-700">{mostVoted.yesVoted}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [
                `${((value / total) * 100).toFixed(2)}%`,
                name,
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminAnalyticks;
