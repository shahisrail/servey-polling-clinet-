/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/0VjpFdG/firmbee-com-jrh5l-Aq-m-Is-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;