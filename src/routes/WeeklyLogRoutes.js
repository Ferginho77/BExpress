const express = require("express");

const {
    getWeekly,
} = require("../controllers/WeeklyLogControllers");

const router = express.Router();

router.get("/", getWeekly);

module.exports = router;