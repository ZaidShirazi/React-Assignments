import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Navbar from "../../components/Navbar";
import "./user.css";

const User = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});
  let { id } = useParams();

  const fetchUserInfo = async () => {
    // fetching single user by dynamic id
    try {
      setIsLoading(true);
      setError({});

      let response = await axios.get(`https://dummyjson.com/users/${id}`);
      console.log(response?.data); // user object
      setUserInfo(response?.data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchUserInfo();
    }
  }, []);

  return (
    <>
      <Navbar />

      <div>
        {isLoading ? (
          /* Skeleton Screen */
          <div className="w-full bg-[#f8f9fa] min-h-screen font-sans animate-pulse">
            <div className="h-48 w-full bg-gray-200" />

            <div className="max-w-6xl mx-auto px-12 -mt-16 pb-12">
              <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-200 shadow-sm" />

              <div className="flex flex-wrap justify-between items-start gap-4 mt-6">
                <div className="min-w-[200px]">
                  <div className="h-8 w-64 max-w-full bg-gray-300 rounded-md" />

                  <div className="h-4 w-48 max-w-full bg-gray-200 rounded-md mt-2" />
                </div>

                <div className="h-10 w-24 bg-gray-200 rounded-full shrink-0" />
              </div>

              <div className="mt-12 space-y-4 max-w-xl">
                <div className="flex space-x-2 items-center">
                  <div className="h-4 w-20 bg-gray-300 rounded" />
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                </div>

                <div className="flex space-x-2 items-center">
                  <div className="h-4 w-12 bg-gray-300 rounded" />
                  <div className="h-4 w-28 bg-gray-200 rounded" />
                </div>

                <div className="flex space-x-2 items-center">
                  <div className="h-4 w-16 bg-gray-300 rounded" />
                  <div className="h-4 w-60 max-w-[70%] bg-gray-200 rounded" />
                </div>

                <div className="flex space-x-2 items-center">
                  <div className="h-4 w-14 bg-gray-300 rounded" />
                  <div className="h-4 w-16 bg-gray-200 rounded" />
                </div>

                <div className="flex space-x-2 items-center">
                  <div className="h-4 w-16 bg-gray-300 rounded" />
                  <div className="h-4 w-52 max-w-[70%] bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </div>
        ) : userInfo ? (
          // User detail section
          <section className="relative pt-40 pb-24 bg-[#f3f4f6]">
            <img
              src="https://pagedone.io/asset/uploads/1705473378.png"
              alt="cover-image"
              className="w-full absolute top-0 left-0 z-0 h-60 object-cover"
            />
            <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
              <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
                <img
                  src={userInfo?.image}
                  alt="user-avatar-image"
                  className="w-40 h-40 rounded-full object-cover p-3 border-white border-4"
                />
              </div>
              <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
                <div className="block">
                  <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1">
                    {userInfo?.firstName} {userInfo?.lastName}
                  </h3>
                  <p className="font-normal text-base leading-7 text-gray-500 ">
                    {userInfo?.address?.address}, {userInfo?.address?.city},{" "}
                    {userInfo?.address?.country}
                  </p>
                </div>
                <button className="rounded-full py-3.5 px-5 flex items-center group transition-all duration-500 bg-indigo-100 ">
                  <svg
                    xmlns="http://w3.org"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-gray-500"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="px-2 font-medium text-base leading-7 text-gray-700 transition-all duration-500 group-hover:text-indigo-600">
                    {userInfo?.role}
                  </span>
                </button>
              </div>

              <div className="flex flex-col lg:flex-row max-lg:gap-5 items-start justify-between py-0.5 border-t border-gray-200 pt-6 mt-6">
                <div className="flex flex-col items-start space-y-2">
                  <p className="text-[clamp(0.95rem,2vw,1.15rem)] font-medium text-gray-700">
                    Username: @{userInfo?.username}
                  </p>
                  <p className="text-[clamp(0.95rem,2vw,1.15rem)] font-medium text-gray-700">
                    Title: {userInfo?.company?.title}
                  </p>
                  <p className="text-[clamp(0.95rem,2vw,1.15rem)] font-medium text-gray-700">
                    University: {userInfo?.university}
                  </p>
                  <p className="text-[clamp(0.95rem,2vw,1.15rem)] font-medium text-gray-700">
                    Gender: {userInfo?.gender}
                  </p>
                  <p className="text-[clamp(0.95rem,2vw,1.15rem)] font-medium text-gray-700">
                    Address: {userInfo?.address?.address},{" "}
                    {userInfo?.address?.city}
                  </p>
                  <p className="text-[clamp(0.95rem,2vw,1.15rem)] font-medium text-gray-700">
                    Email: {userInfo?.email}
                  </p>
                  <p className="text-[clamp(0.95rem,2vw,1.15rem)] font-medium text-gray-700 ">
                    Phone: {userInfo?.phone}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div className="error-screen-wrapper">
            <div className="error-container">
              <p>
                <span className="error-icon">!</span>Error Status:{" "}
                {JSON.stringify(error?.status)}
              </p>
              <p>
                <span className="error-icon">!</span>Error Message:{" "}
                {JSON.stringify(error.response?.data?.message)}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default User;
