/* eslint-disable no-unused-vars */
import React from 'react';

const   Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/0VjpFdG/firmbee-com-jrh5l-Aq-m-Is-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opecity-[#FDF8EE] "></div>
        <div className="hero-content text-center  text-black">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">
              <span className="text-[#E62E2D]">Sharing Your Opinion </span> By
              Rating Products & Brands Around The World
            </h1>

            <button className="btn btn-primary">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;