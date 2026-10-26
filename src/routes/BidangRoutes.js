const express = require("express");

const {
    GetBidang,
} = require("../controllers/BidangControllers");

const router = express.Router();

router.get("/", GetBidang);

module.exports = router;