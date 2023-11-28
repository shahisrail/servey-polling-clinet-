import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row justify-center w-2/3 mt-5">
        <div className="flex flex-col px-7 py-2 bg-slate-200 w-full rounded-tl-3xl">
          <div className="text-lg font-semibold">
            <h1>Send a message</h1>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="">
              <input
                type="text"
                placeholder="Enter first name"
                className="w-full border-2 border-white px-3 py-1 text-sm outline-none placeholder-text-black placeholder-opacity-40 mt-4 mr-2 focus:border-blue-500 duration-200 ease-in-out rounded-lg"
              />
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Enter last name"
                className="w-full md:w-[95%] border-2 border-white px-3 py-1 text-sm outline-none placeholder-text-black placeholder-opacity-40 mt-4 md:ml-2 focus:border-blue-500 duration-200 ease-in-out rounded-lg"
              />
            </div>
          </div>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder-text-black placeholder-opacity-40 mt-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder-text-black placeholder-opacity-40 mt-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder-text-black placeholder-opacity-40 mt-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Write us a message"
            className="mb-3 w-full border-2 border-white h-44 text-sm outline-none placeholder-text-black placeholder-opacity-40 focus:border-blue-500 py-1 px-3 mt-4 resize-none leading-6 duration-200 ease-in-out rounded-lg"
          ></textarea>
          <button className="bg-blue-900 hover:bg-blue-600 px-4 font-semibold text-white w-1/2 text-center mx-auto my-3 rounded-tr-lg rounded-bl-lg">
            Submit
          </button>
        </div>
        <div className="flex flex-col bg-blue-900 text-white md:w-[65%] rounded-br-3xl">
          <h1 className="font-semibold px-5 my-5">Contact info</h1>
          <div className="flex px-5 space-x-2">
            <ion-icon
              name="call-sharp"
              className="text-orange-500 mt-1 my-3"
            ></ion-icon>
            <span className="text-sm">+1 900 267 2678</span>
          </div>
          <div className="flex px-5 space-x-2">
            <ion-icon
              name="mail"
              className="text-orange-500 mt-1 my-3"
            ></ion-icon>
            <span className="text-sm">info@gmail.com</span>
          </div>
          <div className="flex px-5 space-x-2">
            <ion-icon
              name="globe-outline"
              className="text-orange-500 mt-1 my-3"
            ></ion-icon>
            <span className="text-sm">www.tailblocks.org</span>
          </div>
          <div className="px-5 space-x-5 mt-7 mx-auto mb-5">
            <a href="#">
              <i className="fa-brands fa-facebook-f text-white text-2xl"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram text-red-500 text-2xl"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-linkedin text-yellow-500 text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
