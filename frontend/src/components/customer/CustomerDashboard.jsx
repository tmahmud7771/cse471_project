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
  let placebid = true;

  return (
    <>
    <div className="ml-5 font-semibold mt-10 text-2xl relative">
      <div className="absolute h-0.5 w-full bg-gray-800 bottom-0"></div>
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

        <Auctioncard 
        imagelink="https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/9amj8Ylo-oVsFWUrf2s-(edit).jpg?t=169972467674"
        carname = "2003 Porsche 911 Turbo Coupe"
        details = "26,700 Miles, 6-Speed Manual, Performance Modifications"
        startbid = "1.5 Cr."
        timer = "3d 12h 34m"
        />
        <Auctioncard 
        imagelink = "https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/4822e9034b0b6b357b3f73fabdfc10e586c36f68/photos/rjjmlZQw-qr21p-HJy6-(edit).jpg?t=169991877382"
        carname = "2017 Jeep Wrangler Unlimited Rubicon Hard Rock 4x4"
        details = "1 Owner, 4WD, 3-Piece Hardtop, Unmodified"
        startbid = "90 Lacs"
        timer = "4d 2h 34m"
        />
        <Auctioncard 
        imagelink ="https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/e256f6264a44b30223df03b5e6096b472b5a652a/photos/36EANjby-Lqcbc8TKjv-(edit).jpg?t=169694558483"
        carname = "1983 Nissan Fairlady Z Turbo"
        details = "Japanese-Market Z31, 5-Speed Manual, Turbo V6, Rally Car Replica"
        startbid = "1.3 Cr."
        timer = "2d 12h 34m"

        />
        <Auctioncard 
        imagelink ="https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/c7387fa5557775cb743f87fc02d6cb831afb20b2/photos/KPLBkR4a-8v7AFlC0q4-(edit).jpg?t=169981317838"
        carname = "2019 Subaru WRX STI"
        details = "1 Owner, 6-Speed Manual, Extensively Modified, AWD, Lapis Blue"
        startbid = "55 Lacs"
        timer = "1d 2h 34m"
        />
        <Auctioncard 
        
        imagelink ="https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/rjRR7y8l-zfBnucmtO5-(edit).jpg?t=169957581367"
        carname = "2023 Rivian R1S Adventure Edition"
        details = "Quad-Motor AWD, Large Battery Pack, Ocean Coast Interior"
        startbid = "1.8 Cr."
        timer = "2d 1h 3m"
        />
      </div>

      <div className="ml-5 font-semibold my-10 text-2xl relative">
      
        Auctoin Your Car
        <div className="absolute h-0.5 w-full bg-gray-800 bottom-0"></div>
      </div>


      <div className="flex justify-center bg-gray-900 rounded-[50px]">
        <Auctoinform/>

      </div>

      <div className = "ml-5 font-semibold my-10 text-2xl relative">

        My auctions
        <div className="absolute h-0.5 w-full bg-gray-800 bottom-0"></div>

      </div>

      <div className="flex flex-wrap mx-5 mt-10 gap-24 overflow-auto ">
        <Auctioncard
        imagelink="https://media-r2.carsandbids.com/cdn-cgi/image/width=2080,quality=70/ee7f173e46ec801a48d1673c50f9cebaa1bf2854/photos/3gedNQmb-Ew-ISBZumA-(edit).jpg?t=169843298201"
        carname="2021 Ferrari F8 Spider"
        details = "710-hp Twin-Turbo V8, Rosso Corsa, $111,790 In Options"
        startbid="4.5 Cr."
        placebid = {false}
        timer = "0d 3h 24m"
        />
      </div>

    </>
  );
};

export default CustomerDashboard;
