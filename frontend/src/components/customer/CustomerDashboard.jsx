import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import Auctioncard from "./Auctioncard";
import Auctoinform from "./Auctoinform";
const CustomerDashboard = () => {
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



  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bidPrice, setBidPrice] = useState('');
  const [tranxd,setTrnxd] = useState('')
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const submitBid = () => {
    // Add your logic to handle the bid submission
    if (bidPrice.trim() === '') {
      alert('Please enter a bid amount.');
      return;
    }
    if (tranxd.trim() === '') {
      alert('Please enter a transaction id');
      return;
    }
    if (bidPrice.trim() === '') {
      alert('Please enter a bid amount.');
      return;
    }

    alert(`Bid submitted! Price: ${bidPrice}`);
    closeModal();
  };

  const [searchTerm, setSearchTerm] = useState('');

  // Handle search button click
  const handleSearch = () => {
    // Perform search logic with the searchTerm
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <>
      <div className="ml-5 font-semibold mt-10 text-2xl">

        On Going Auctions

      </div>

      <div className="flex items-center mt-3 ml-5">
        <input
          type="text"
          className="px-3 py-2 border rounded-md mr-2"
          placeholder="Name of the car"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap mx-5 mt-10 gap-24 overflow-auto ">

        <Auctioncard/>
        <Auctioncard/>
        <Auctioncard/>
        <Auctioncard/>
        <Auctioncard/>
      </div>

      <div className="ml-5 font-semibold my-10 text-2xl">

        Auctoin Your Car

      </div>


      <div className="flex justify-center bg-gray-900 rounded-2xl">
        <Auctoinform/>

      </div>

    </>
  );
};

export default CustomerDashboard;
