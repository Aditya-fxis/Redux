import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
//   const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const loggedInUser = useSelector((state)=>state.todo.loggedInUser);
  console.log(loggedInUser)

//   console.log("user",loggedInUser)
if (!loggedInUser) {
    return (
      <div className="bg-gray-800 text-white flex items-center justify-center min-h-screen">
        <div className="p-4 text-center">
          Please log in to view your profile.
        </div>
      </div>
    );
  }


  return (
    <div className="bg-white  mt-28 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Profile</h1>
      <div className="space-y-4 text-gray-700">
        <p>
          <strong>Name:</strong> {loggedInUser.name}
        </p>
        <p>
          <strong>Email:</strong> {loggedInUser.email}
        </p>
      </div>
    </div>
  );
};

export default Profile;
