/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import UseAdmin from "../../Hooks/UseAdmin";
import UseServay from "../../Hooks/UseServay";

const Pricing = () => {
  const [isAdmin] = UseAdmin();
  const [isServey] = UseServay();
  // const shouldDisablePurchaseButton = () => {
  //   return; // Disable if user is admin or survey
  // };
 
  return (
    <div>
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/1XSP1qv/istockphoto-1421141255-1024x1024.jpg)",
        }}
      >
        <div className="  bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <h2 className="text-5xl text-center my-10">Our Pcakages </h2>
      <div className="flex w-full justify-center">
        <div className=" flex md:flex-row flex-col px-4 py-2 my-10 gap-y-7 gap-x-7 max-w-7xl ">
          <div className="bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
            <div className="flex flex-col justify-center items-center text-white p-2 ">
              <div className="bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 rounded-full p-2">
                <ion-icon name="logo-amplify" className="text-5xl "></ion-icon>
              </div>
              <div className="text-3xl m-2 ">Weakly</div>
              <div className="text-white text-sm my-2 flex flex-col items-center h-60">
                <div className="flex justify-center my-3 text-white font-medium md:tracking-tighter ">
                  <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">
                    $
                  </div>
                  <div className="text-3xl md:text-5xl">20.78</div>
                </div>

                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">Pro User for 7 days</div>
                </div>
                <div className="flex">
                  <ion-icon name="close-sharp"> </ion-icon>
                  <div className="">Unlimited Databases</div>
                </div>

                <div className="flex">
                  <ion-icon name="close-sharp"> </ion-icon>
                  <div className="">Daily Backups</div>
                </div>
                <div className="flex">
                  <ion-icon name="close-sharp"> </ion-icon>
                  <div className="">Free E-mail</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              {!(isAdmin || isServey) && (
                <Link to="/peyment">
                  <button
                    className={`btn bg-[#7534D8] text-white text-[25px] ${
                      isAdmin || isServey ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    disabled={isAdmin || isServey}
                  >
                    Purchase
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
            <div className="flex flex-col justify-center items-center text-white p-2 ">
              <div className="bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 rounded-full p-2">
                <ion-icon name="logo-octocat" className="text-5xl "></ion-icon>
              </div>
              <div className="text-3xl m-2 ">Monthly</div>
              <div className="text-white text-sm my-2 flex flex-col items-center h-60">
                <div className="flex justify-center my-3 text-white font-medium md:tracking-tighter ">
                  <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">
                    $
                  </div>
                  <div className="text-3xl md:text-5xl">55.78</div>
                </div>
                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">Pro Users for 1 Month</div>
                </div>

                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">Unlimited Databases</div>
                </div>

                <div className="flex">
                  <ion-icon name="close-sharp"> </ion-icon>
                  <div className="">Daily Backups</div>
                </div>
                <div className="flex">
                  <ion-icon name="close-sharp"> </ion-icon>
                  <div className="">Free E-mail</div>
                </div>
              </div>
              <div className="flex justify-center">
                {!(isAdmin || isServey) && (
                  <Link to="/peyment">
                    <button
                      className={`btn bg-[#7534D8] text-white text-[25px] ${
                        isAdmin || isServey
                          ? "cursor-not-allowed opacity-50"
                          : ""
                      }`}
                      disabled={isAdmin || isServey}
                    >
                      Purchase
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-400 via-gray-900 to-blue-800 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
            <div className="flex flex-col justify-center items-center text-white p-2 ">
              <div className="bg-gradient-to-br from-gray-400 via-gray-900 to-blue-800 rounded-full p-2">
                <ion-icon name="logo-gitlab" className="text-5xl "></ion-icon>
              </div>
              <div className="text-3xl m-2 ">Yearly</div>
              <div className="text-white text-sm my-2 flex flex-col items-center h-60">
                <div className="flex justify-center my-3 text-white font-medium md:tracking-tighter ">
                  <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">
                    $
                  </div>
                  <div className="text-3xl md:text-5xl">89.78</div>
                </div>

                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">Pro Users for 1 year</div>
                </div>
                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">Unlimited Databases</div>
                </div>

                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">Daily Backups</div>
                </div>
                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">Free E-mail</div>
                </div>
              </div>
              <div className="flex justify-center">
                {!(isAdmin || isServey) && (
                  <Link to="/peyment">
                    <button
                      className={`btn bg-[#7534D8] text-white text-[25px] ${
                        isAdmin || isServey
                          ? "cursor-not-allowed opacity-50"
                          : ""
                      }`}
                      disabled={isAdmin || isServey}
                    >
                      Purchase
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
