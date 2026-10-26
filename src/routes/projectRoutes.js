const express = require("express");

const {
    getProjects,
    getProjectById,
    updateProject,
    deleteProject,
    createProject,
} = require("../controllers/ProjectControllers");



const router = express.Router();

router.post("/", createProject);
router.get("/", getProjects);
router.get("/:id", getProjectById);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;