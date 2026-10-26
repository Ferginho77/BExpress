const Project = require("../models/Project");

// CREATE
const createProject = async (req, res) => {
    try {
        const { NamaProyek, Jenis, Perizinan} = req.body;


        const project = await Project.create({
            NamaProyek,
            Jenis,
            Perizinan,
        });

        return res.status(201).json({
            message: "Project berhasil dibuat",
            data: project,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Gagal membuat project",
            error: error.message,
        });
    }
};


// READ ALL
const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll({
            order: [["ProyekId", "DESC"]],
        });

        return res.status(200).json({
            message: "Data project berhasil diambil",
            data: projects,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Gagal mengambil data project",
            error: error.message,
        });
    }
};


// READ BY ID
const getProjectById = async (req, res) => {
    try {
        const { ProyekId } = req.params;

        const project = await Project.findByPk(ProyekId);

        if (!project) {
            return res.status(404).json({
                message: "Project tidak ditemukan",
            });
        }

        return res.status(200).json({
            message: "Data project berhasil diambil",
            data: project,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Gagal mengambil project",
            error: error.message,
        });
    }
};


// UPDATE
const updateProject = async (req, res) => {
    try {
        const { ProyekId } = req.params;

        const project = await Project.findByPk(ProyekId);

        if (!project) {
            return res.status(404).json({
                message: "Project tidak ditemukan",
            });
        }

        const {
            NamaProyek,
            Jenis,
            Perizinan,
        } = req.body;

        await project.update({
           NamaProyek,
            Jenis,
            Perizinan,
        });

        return res.status(200).json({
            message: "Project berhasil diperbarui",
            data: project,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Gagal memperbarui project",
            error: error.message,
        });
    }
};


// DELETE
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;

        const project = await Project.findByPk(id);

        if (!project) {
            return res.status(404).json({
                message: "Project tidak ditemukan",
            });
        }

        await project.destroy();

        return res.status(200).json({
            message: "Project berhasil dihapus",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Gagal menghapus project",
            error: error.message,
        });
    }
};


module.exports = {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject,
};