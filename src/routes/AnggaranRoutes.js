const express = require("express");

const {
    getAnggaran,
    createAnggaran,
    DeleteAnggaran,
} = require("../controllers/AnggaranControllers");

const router = express.Router();

router.get("/", getAnggaran);
router.post("/", createAnggaran);
router.delete("/:AnggaranId", DeleteAnggaran);

module.exports = router;