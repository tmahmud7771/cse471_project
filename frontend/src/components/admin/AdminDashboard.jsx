import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  function checkUserLoggedIn() {
    const token = localStorage.getItem("token");
    let userLoggedIn = false;

    if (token) {
      userLoggedIn = true;
    }

    return userLoggedIn;
  }
  const userLoggedIn = checkUserLoggedIn();

  const navigate = useNavigate();

  const userEmail = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).email
    : "";

  useEffect(() => {
    if (!userLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      {userEmail === "tmahmud44@gmail.com" ? (
        <Card
          className="max-w-sm"
          imgSrc="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          horizontal
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            {userEmail}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Noteworthy technology acquisitions 2021
          </p>
        </Card>
      ) : (
        <h1>You are not an admin</h1>
      )}
    </>
  );
};

export default AdminDashboard;
