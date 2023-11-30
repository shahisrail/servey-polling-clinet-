/* eslint-disable no-unused-vars */
import React from 'react';
import UseAuth from '../../Hooks/UseAuth';

const UserProfile = () => {
  const {user} = UseAuth()
  return (
    <div className=" mx-auto w-1/2 flex flex-col justify-center items-center  mt-20">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={user.photoURL} alt="" />
        </div>
      </div>
      <h2> Name: {user.displayName} </h2>
      <h2> email : {user?.email} </h2>
    </div>
  );
};

export default UserProfile;