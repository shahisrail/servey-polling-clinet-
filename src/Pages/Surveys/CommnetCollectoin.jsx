/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import UseAuth from "../../Hooks/UseAuth";

const CommnetCollectoin = ({ data }) => {
  console.log(data);
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { email, name, comment } = data;
  const { user } = UseAuth();
  return (
    <div className="flex items-center gap-2 my-2 ">
      <div className="avatar">
        <div className="w-11  rounded-full">
          <img src={user?.photoURL} alt="" />
        </div>
      </div>
      <div>
        <h2> name: {name} </h2>
        <h2> comment: {comment} </h2>
      </div>
    </div>
  );
};

export default CommnetCollectoin;
