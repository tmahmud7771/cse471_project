const express = require("express");
const router = express.Router();
const {
  createAuction,
  getAllAuctions,
  getAuctionById,
  updateAuction,
  deleteAuction,
} = require("../controller/auctionController");

// create auction
router.post("/createauction", createAuction);

// get all auctions
router.get("/getallauctoin", getAllAuctions);

// get a specific auction by ID
router.get("/:id", getAuctionById);

// update an auction by ID
router.put("/:id", updateAuction);

// delete an auction by ID
router.delete("/:id", deleteAuction);

module.exports = router;
