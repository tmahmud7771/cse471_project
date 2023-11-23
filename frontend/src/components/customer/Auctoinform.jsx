import React, { useState } from 'react';

const Auctoinform = () => {
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [modelYear, setModelYear] = useState('');
  const [date, setDate] = useState('');
  const [carDetails, setCarDetails] = useState('');
  const [startPrice, setStartPrice] = useState('');
  const [auctionStartTime, setAuctionStartTime] = useState('');
  const [auctionEndTime, setAuctionEndTime] = useState('');
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform submission logic with the state values
    console.log({
      carName,
      carModel,
      modelYear,
      date,
      carDetails,
      startPrice,
      auctionStartTime,
      auctionEndTime,
      image,
    });
    alert(`Form Submitted`);

    // Reset the form
    setCarName('');
    setCarModel('');
    setModelYear('');
    setDate('');
    setCarDetails('');
    setStartPrice('');
    setAuctionStartTime('');
    setAuctionEndTime('');
    setImage(null);
  };

  return (
    <div>
      <form className="w-full max-w-lg my-10" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6 ">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="carName">
              Car Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="carName"
              type="text"
              placeholder="Nissan"
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="carModel">
              Car model
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="carModel"
              type="text"
              placeholder="GT-R"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="modelYear">
              Model Year
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="modelYear"
              type="text"
              placeholder="2015"
              value={modelYear}
              onChange={(e) => setModelYear(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white font-bold mb-2" htmlFor="carDetails">
              Car Details
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="carDetails"
              type="text"
              placeholder="It is a 4-speed manual..."
              value={carDetails}
              onChange={(e) => setCarDetails(e.target.value)}
            />
            <p className="text-white text-xs italic">Explain the car best of your knowledge</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="startPrice">
              Start Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="startPrice"
              type="text"
              placeholder="1.2 Cr."
              value={startPrice}
              onChange={(e) => setStartPrice(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="auctionStartTime">
              Auction Start Time
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="auctionStartTime"
              type="date"
              value={auctionStartTime}
              onChange={(e) => setAuctionStartTime(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="auctionEndTime">
              Auction End Time
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="auctionEndTime"
              type="date"
              value={auctionEndTime}
              onChange={(e) => setAuctionEndTime(e.target.value)}
            />
          </div>
        <div className="w-full px-3 mt-2">
        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="car-image">
                Add Image
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="car-image"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
            />
            <p className="text-gray-600 text-xs italic mt-2">Upload an image for the car</p>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
);
};

export default Auctoinform;