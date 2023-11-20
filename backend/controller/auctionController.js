const Auction = require("../models/Auction");

const createAuction = async (req, res) => {
  try {
    const newAuction = new Auction({
      carName: req.body.carName,
      modelName: req.body.modelName,
      modelYear: req.body.modelYear,
      startingPrice: req.body.startingPrice,
      date: req.body.date,
      details: req.body.details,
      image: req.body.image,
      auctionStartTime: req.body.auctionStartTime,
      auctionEndTime: req.body.auctionEndTime,
    });

    const auction = await newAuction.save();

    res.status(200).send({
      message: "Auction created successfully!",
      auction,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find({}).sort({ timestamp: -1 });
    res.send(auctions);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAuctionById = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);
    res.send(auction);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateAuction = async (req, res) => {
  try {
    const auction = await Auction.findOne({ _id: req.params.id });

    if (auction) {
      auction.carName = req.body.carName;
      auction.modelName = req.body.modelName;
      auction.modelYear = req.body.modelYear;
      auction.startingPrice = req.body.startingPrice;
      auction.date = req.body.date;
      auction.details = req.body.details;
      auction.image = req.body.image;
      auction.auctionStartTime = req.body.auctionStartTime;
      auction.auctionEndTime = req.body.auctionEndTime;

      const updatedAuction = await auction.save();

      res.send({
        message: "Auction updated successfully!",
        auction: updatedAuction,
      });
    } else {
      res.status(404).send({
        message: "This Auction not found!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const deleteAuction = async (req, res) => {
  try {
    await Auction.deleteOne({ _id: req.params.id });

    res.status(200).send({
      message: "Auction deleted successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  createAuction,
  getAllAuctions,
  getAuctionById,
  updateAuction,
  deleteAuction,
};
