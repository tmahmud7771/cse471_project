const mongoose = require("mongoose");

const bidderSchema = new mongoose.Schema({
  bidderName: {
    type: String,
    required: true,
  },
  bidAmount: {
    type: Number,
    required: true,
  },
});

const auctionSchema = new mongoose.Schema(
  {
    carName: {
      type: String,
      required: true,
    },
    modelName: {
      type: String,
      required: true,
    },
    modelYear: {
      type: Number,
      required: true,
    },
    startingPrice: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    details: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    auctionStartTime: {
      type: Date,
      required: true,
    },
    auctionEndTime: {
      type: Date,
      required: true,
    },
    bidders: [bidderSchema],
  },
  {
    timestamps: true,
  }
);

const Auction = mongoose.model("Auction", auctionSchema);

module.exports = Auction;
