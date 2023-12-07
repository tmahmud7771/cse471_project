import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import Auctioncard from "./Auctioncard";
import Auctoinform from "./Auctoinform";
import axios from "axios";
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

  const [data, setData] = useState();
  const [email, setEmail] = useState();
  const [refresh, setRefrsh] = useState();
  const [usercardata, setUsercardata] = useState();
  const [issue, setIssue] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/auctoin/getallauctoin"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error appropriately
    }
  };
  const fetchuserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/auctoin/${userEmail}`
      );
      setUsercardata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error appropriately
    }
  };

  useEffect(() => {
    if (!userLoggedIn) {
      navigate("/login");
    }

    fetchData();
    fetchuserData();
  }, []);

  console.log(data);
  console.log(usercardata);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bidPrice, setBidPrice] = useState("");
  const [tranxd, setTrnxd] = useState("");
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const submitBid = () => {
    // Add your logic to handle the bid submission
    if (bidPrice.trim() === "") {
      alert("Please enter a bid amount.");
      return;
    }
    if (tranxd.trim() === "") {
      alert("Please enter a transaction id");
      return;
    }
    if (bidPrice.trim() === "") {
      alert("Please enter a bid amount.");
      return;
    }

    alert(`Bid submitted! Price: ${bidPrice}`);
    closeModal();
  };

  const [searchTerm, setSearchTerm] = useState("");

  // Handle search button click
  const handleSearch = () => {
    // Perform search logic with the searchTerm
    console.log(`Searching for: ${searchTerm}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3001/api/make/report`,
        {
          email: userEmail,
          name: JSON.parse(localStorage.getItem("user")).name,
          message: issue,
        }
      );
      console.log(response.data);

      // Assuming bidPrice is a state or prop that holds the bid price
      // Update this alert message based on your application's context
      alert("Report submitted successfully!");
    } catch (err) {
      console.error("Error submitting report:", err);
      alert("Failed to submit report.");
    }
  };

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

      <div className="flex flex-wrap mx-5 mt-10 gap-24 overflow-auto">
        {data?.map(
          (item, index) =>
            item.email !== userEmail && ( // Conditional rendering based on email match
              <Auctioncard
                key={index} // Assuming each item has a unique 'id'. If not, use 'index'.
                imagelink={item.image}
                carname={item.carName}
                details={`${item.modelYear} ${item.modelName}, ${item.details}`}
                startbid={item.startingPrice}
                id={item._id}
                // timer={/* logic to calculate remaining time based on item.auctionEndTime */}
              />
            )
        )}
      </div>

      <div className="ml-5 font-semibold my-10 text-2xl relative">
        Auctoin Your Car
        <div className="absolute h-0.5 w-full bg-gray-800 bottom-0"></div>
      </div>

      <div className="flex justify-center bg-gray-900 rounded-[50px] shadow-lg">
        <Auctoinform />
      </div>

      <div className="ml-5 font-semibold my-10 text-2xl relative">
        My Auctions
        <div className="absolute h-0.5 w-full bg-gray-800 bottom-0"></div>
      </div>

      <div className="flex flex-wrap mx-5 mt-10 gap-24 overflow-auto  ">
        {usercardata?.map((item, index) => (
          <Auctioncard
            key={index} // Assuming each item has a unique 'id'. If not, use 'index'.
            imagelink={item.image}
            carname={item.carName}
            details={`${item.modelYear} ${item.modelName}, ${item.details}`}
            startbid={item.startingPrice}
            placebid={false}
            id={item._id}
            // timer={/* logic to calculate remaining time based on item.auctionEndTime */}
          />
        ))}
      </div>

      <div className="ml-5 font-semibold my-10 text-2xl relative">
        My Bids
        <div className="absolute h-0.5 w-full bg-gray-800 bottom-0"></div>
      </div>
      <div className=" flex flex-wrap mx-5 my-10 gap-24 overflow-auto">
        <table id="bookingTable" className="w-full border-collapse">
          <thead>
            <tr>
              <th className="w-14 h-8 px-5 py-1.5 bg-white rounded shadow">
                ID
              </th>

              <th className="w-14 h-8 px-5 py-1.5 bg-white rounded shadow">
                Car Model{" "}
              </th>
              <th className="w-14 h-8 px-5 py-1.5 bg-white rounded shadow">
                Email
              </th>
              <th className="w-14 h-8 px-5 py-1.5 bg-white rounded shadow">
                Placed Bid
              </th>
              <th className="w-14 h-8 px-5 py-1.5 bg-white rounded shadow">
                Payment
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item1) =>
              item1.bidders?.map(
                (item2, index) =>
                  item2.bidderEmail === userEmail && ( // Conditional rendering
                    <tr key={index}>
                      <td className="pt-2">{index + 1}</td>
                      <td className="pt-2">{item1.modelName}</td>
                      <td className="pt-2">{item2.bidderEmail}</td>
                      <td className="pt-2">
                        <b>{item2.bidAmount}</b>
                      </td>
                      <td className="pt-2 flex justify-center">
                        <button>
                          <div className="w-[75px] h-8 px-5 py-1.5 bg-yellow-500 rounded shadow flex-col justify-center items-center gap-2.5 inline-flex">
                            <div className="text-black text-base font-light font-['Oxygen']">
                              Pending
                            </div>
                          </div>
                        </button>
                      </td>
                    </tr>
                  )
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="ml-5 font-semibold my-10 text-2xl relative">
        Bids On My Car
        <div className="absolute h-0.5 w-full bg-gray-800 bottom-0"></div>
      </div>
      <div className=" flex flex-wrap mx-5 my-10 gap-24 overflow-auto">
        <table id="bookingTable" className="w-full border-collapse">
          <thead>
            <tr>
              <th className="w-14 h-8 px-5 py-1.5 bg-white rounded shadow">
                ID
              </th>

              <th className="w-14 h-8 px-5 py-1.5 bg-white rounded shadow">
                Car Model{" "}
              </th>
              <th className="w-14 h-8 px-5 py-1.5 bg-white rounded shadow">
                Email
              </th>
              <th className="w-14 h-8 px-5 py-1.5 bg-white rounded shadow">
                Placed Bid
              </th>
              <th className="w-14 h-8 px-5 py-1.5 bg-white rounded shadow">
                Payment
              </th>
            </tr>
          </thead>

          <tbody>
            {usercardata?.map((item1) =>
              item1.bidders?.map((item2, index) => (
                <tr key={index}>
                  <td className="pt-2">{index + 1}</td>
                  <td className="pt-2">{item1.modelName}</td>
                  <td className="pt-2">{item2.bidderEmail}</td>
                  <td className="pt-2">
                    <b>{item2.bidAmount}</b>
                  </td>
                  <td className="pt-2 flex justify-center">
                    <button>
                      <div className="w-[75px] h-8 px-5 py-1.5 bg-yellow-500 rounded shadow flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="text-black text-base font-light font-['Oxygen']">
                          Pending
                        </div>
                      </div>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-2">
        <div className="ml-5 font-semibold my-10 text-2xl relative">
          Report and Issue
          <div className="absolute h-0.5 w-full bg-gray-800 bottom-0"></div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
              Describe The Issues You Faced
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-800 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="..."
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-start">
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-gray-800 rounded hover:bg-gray-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomerDashboard;
