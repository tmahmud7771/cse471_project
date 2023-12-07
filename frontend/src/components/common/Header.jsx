import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Img from "../../assets/Black_and_Red_Modern_Automotive_Car_Logo__2_-removebg-preview.png";

const Header = () => {
  const navigate = useNavigate();

  function checkUserLoggedIn() {
    const token = localStorage.getItem("token");
    return !!token; // Returns true if token exists, false otherwise
  }

  const userLoggedIn = checkUserLoggedIn();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/home");
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex space-x-4">
            <div className="flex-shrink-0">
              <img className="h-12 w-auto" src={Img} alt="Your Company" />
            </div>
            {/* Links */}
            <a
              href="#"
              className="text-white rounded-md px-3 py-2 text-sm font-medium"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="admin"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Admin
            </a>
            <a
              href="customer"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Customer
            </a>
          </div>
          <div className="flex items-center space-x-4">
            {!userLoggedIn ? (
              <a
                href="login"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Login
              </a>
            ) : (
              <div className="flex space-x-4">
                <a
                  onClick={handleLogout}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Logout
                </a>
                <a
                  href="/changepass"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Change Password
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
