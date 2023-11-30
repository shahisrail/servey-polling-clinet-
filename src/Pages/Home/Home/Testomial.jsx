/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testomial = () => {
  return (
    <div>
      <h1 className="text-center mt-5 text-5xl">Testimonials�👥</h1>
      <div className="mt-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="flex justify-center bg-gradient-to-r from-blue-700 via-blue-800 to-stone-900 p-4">
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center">
                  <div className="overflow-hidden md:w-3/4 m-4 flex justify-center bg-white">
                    <div className="flex flex-col md:flex-row items-center justify-center md:w-3/4">
                      <div className="flex-col items-center justify-center flex py-2">
                        <div className="text-3xl font-bold text-stone-700 text-center md:-ml-24">
                          User Review
                        </div>
                        <div className="text-md text-stone-700 font-medium text-center md:-ml-24 m-2">
                          Discover What Our Users Say about Surveys and Polling
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center mx-10">
                          <div className="pl-2 pt-2 bg-gradient-to-r from-blue-700 via-blue-600 to-stone-700 rounded-full">
                            <img
                              src="https://i.ibb.co/1JvnjmN/images.jpg"
                              alt=""
                              className="rounded-full"
                            />
                          </div>
                          <div className="flex flex-col w-full md:w-2/3 mx-10">
                            <div className="text-stone-600 font-normal m-2 italic">
                              "The survey and polling platform we use has been
                              an integral part of our decision-making process.
                              Its robust features and ease of use have made
                              collecting and analyzing data effortless."
                            </div>
                            <div className="font-bold text-2xl text-blue-500">
                              Emily Adams
                            </div>
                            <div className="text-stone-500 text-sm">
                              <a href="#">
                                Marketing Director, XYZ Corporation
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex justify-center bg-gradient-to-r from-blue-700 via-blue-800 to-stone-900 p-4">
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center">
                  <div className="overflow-hidden md:w-3/4 m-4 flex justify-center bg-white">
                    <div className="flex flex-col md:flex-row items-center justify-center md:w-3/4">
                      <div className="flex-col items-center justify-center flex py-2">
                        <div className="text-3xl font-bold text-stone-700 text-center md:-ml-24">
                          User Review
                        </div>
                        <div className="text-md text-stone-700 font-medium text-center md:-ml-24 m-2">
                          What Our Users are Saying about Surveys and Polling
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center mx-10">
                          <div className="pl-2 pt-2 bg-gradient-to-r from-blue-700 via-blue-600 to-stone-700 rounded-full">
                            <img
                              src="https://i.ibb.co/Q8qJtxP/images.jpg"
                              alt=""
                              className="rounded-full"
                            />
                          </div>
                          <div className="flex flex-col w-full md:w-2/3 mx-10">
                            <div className="text-stone-600 font-normal m-2 italic">
                              "This survey and polling platform has been
                              instrumental in gathering valuable insights from
                              our audience. Its user-friendly interface and
                              comprehensive analytics have simplified our
                              decision-making process."
                            </div>
                            <div className="font-bold text-2xl text-blue-500">
                              Sarah Johnson
                            </div>
                            <div className="text-stone-500 text-sm">
                              <a href="#">Marketing Manager, ABC Company</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex justify-center bg-gradient-to-r from-blue-700 via-blue-800 to-stone-900 p-4">
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center">
                  <div className="overflow-hidden md:w-3/4 m-4 flex justify-center bg-white">
                    <div className="flex flex-col md:flex-row items-center justify-center md:w-3/4">
                      <div className="flex-col items-center justify-center flex py-2">
                        <div className="text-3xl font-bold text-stone-700 text-center md:-ml-24">
                          User Review
                        </div>
                        <div className="text-md text-stone-700 font-medium text-center md:-ml-24 m-2">
                          See What People are Saying about our Surveys and
                          Polling Tool
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center mx-10">
                          <div className="pl-2 pt-2 bg-gradient-to-r from-blue-700 via-blue-600 to-stone-700 rounded-full">
                            <img
                              src="https://i.ibb.co/3dHfGWt/download.jpg"
                              alt=""
                              className="rounded-full"
                            />
                          </div>
                          <div className="flex flex-col w-full md:w-2/3 mx-10">
                            <div className="text-stone-600 font-normal m-2 italic">
                              "Our survey and polling tool offers an intuitive
                              interface and powerful analytics, making data
                              collection and analysis a breeze. It has
                              significantly streamlined our decision-making
                              process."
                            </div>
                            <div className="font-bold text-2xl text-blue-500">
                              Jane Smith
                            </div>
                            <div className="text-stone-500 text-sm">
                              <a href="#">
                                Chief Marketing Officer, XYZ Corporation
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex justify-center bg-gradient-to-r from-blue-700 via-blue-800 to-stone-900 p-4">
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center">
                  <div className="overflow-hidden md:w-3/4 m-4 flex justify-center bg-white">
                    <div className="flex flex-col md:flex-row items-center justify-center md:w-3/4">
                      <div className="flex-col items-center justify-center flex py-2">
                        <div className="text-3xl font-bold text-stone-700 text-center md:-ml-24">
                          User Review
                        </div>
                        <div className="text-md text-stone-700 font-medium text-center md:-ml-24 m-2">
                          See What People are Saying about our Surveys and
                          Polling Tool
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center mx-10">
                          <div className="pl-2 pt-2 bg-gradient-to-r from-blue-700 via-blue-600 to-stone-700 rounded-full ">
                            <img
                              src="https://source.unsplash.com/150x150/?survey,polling"
                              alt=""
                              className="rounded-full"
                            />
                          </div>
                          <div className="flex flex-col w-full md:w-2/3 mx-10">
                            <div className="text-stone-600 font-normal m-2 italic">
                              "This survey and polling tool has revolutionized
                              the way we gather feedback and insights from our
                              audience. It's user-friendly interface and robust
                              analytics have immensely helped in making
                              data-driven decisions."
                            </div>
                            <div className="font-bold text-2xl text-blue-500 ">
                              David
                            </div>
                            <div className="text-stone-500 text-sm">
                              <a href="#">Head of Marketing, ABC Company</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex justify-center bg-gradient-to-r from-blue-700 via-blue-800 to-stone-900 p-4">
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center">
                  <div className="overflow-hidden md:w-3/4 m-4 flex justify-center bg-white">
                    <div className="flex flex-col md:flex-row items-center justify-center md:w-3/4">
                      <div className="flex flex-col items-center justify-center py-2">
                        <div className="text-3xl font-bold text-stone-700 text-center md:-ml-24">
                          User Review
                        </div>
                        <div className="text-md text-stone-700 font-medium text-center md:-ml-24 m-2">
                          See What People are Saying
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center mx-10">
                          <div className="pl-2 pt-2 bg-gradient-to-r from-blue-700 via-blue-600 to-stone-700 rounded-full">
                            <img
                              src="https://source.unsplash.com/150x150/?man,boy"
                              alt=""
                              className="rounded-full"
                            />
                          </div>
                          <div className="flex flex-col w-full md:w-2/3 mx-10">
                            <div className="text-stone-600 font-normal m-2 italic">
                              "Using this polling platform has significantly
                              improved our data collection process. The
                              simplicity of creating surveys coupled with
                              in-depth analysis tools has made a notable impact
                              on our decision-making."
                            </div>
                            <div className="font-bold text-2xl text-blue-500">
                              Jane Smith
                            </div>
                            <div className="text-stone-500 text-sm">
                              <a href="#">Marketing Manager, XYZ Corporation</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testomial;
