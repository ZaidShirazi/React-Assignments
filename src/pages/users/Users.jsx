import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import Navbar from "../../components/Navbar";
import UserCard from "../../components/UserCard";
import "./users.css";

const skeletonArray = Array.from({ length: 30 });

const Users = () => {
  let [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      let response = await axios.get("https://dummyjson.com/users");
      setUsers([...response?.data?.users]);
      console.log(response?.data?.users);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Navbar />

      <main className="main">
        {isLoading ? (
          skeletonArray.map((_, index) => {
            return (
              <div key={index} className="flex w-52 flex-col gap-4">
                <div className="bg-gray-200 animate-pulse h-32 w-full rounded"></div>
                <div className="bg-gray-200 animate-pulse h-4 w-28 rounded"></div>
                <div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
                <div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
              </div>
            );
          })
        ) : users.length > 0 ? (
          users?.map((user) => {
            return (
              <UserCard
                key={user?.id}
                uid={user?.id}
                title={user?.title}
                firstName={user?.firstName}
                lastName={user?.lastName}
                image={user?.image}
              />
            );
          })
        ) : (
          <p>No Users.</p>
        )}
      </main>
    </>
  );
};

export default Users;
