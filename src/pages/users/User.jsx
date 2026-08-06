import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Navbar from "../../components/Navbar";
import "./user.css";

const User = () => {
  let [userInfo, setUserInfo] = useState(null);
  let { id } = useParams();

  const fetchUserInfo = async () => {
    // fetching single user by dynamic id
    try {
      let response = await axios.get(`https://dummyjson.com/users/${id}`);
      console.log(response?.data);
      setUserInfo(response?.data);
    } catch (error) {
      console.error(error);
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
        {userInfo ? (
          // UI
<section className="relative pt-40 pb-24">
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
        className="border-2 rounded-full object-cover"
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
      <button className="rounded-full py-3.5 px-5 bg-gray-100 flex items-center group transition-all duration-500 hover:bg-indigo-100 ">
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
          Address: {userInfo?.address?.address}, {userInfo?.address?.city}
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
          //
          <h2>Loading user profile...</h2>
        )}
      </div>
    </>
  );
};

export default User;
