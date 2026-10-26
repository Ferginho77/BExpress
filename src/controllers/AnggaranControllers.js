const Anggaran = require('../models/Anggaran');

// READ ALL
const getAnggaran = async (req, res) => {
    try {
        const anggaran = await Anggaran.findAll({
            order: [["AnggaranId", "DESC"]],
        });
        res.json(anggaran);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// CREATE

const createAnggaran = async (req, res) => {
    try {
        const { Bidang, Tahapan, RencanaAnggaran, Realisasi, TanggalAnggaran, ProyekId } = req.body;

        if (!Bidang || !Tahapan || !RencanaAnggaran || !Realisasi || !TanggalAnggaran || !ProyekId) {
            return res.status(400).json({ message: "Semua field wajib diisi" });
        }
        const anggaran = await Anggaran.create({
            Bidang,
            Tahapan,
            RencanaAnggaran,
            Realisasi,
            TanggalAnggaran,
            ProyekId,
        });
        res.status(201).json({ message: "Anggaran berhasil dibuat", data: anggaran });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const DeleteAnggaran = async (req, res) => {
    try {
        const { AnggaranId } = req.params;
        const anggaran = await Anggaran.findByPk(AnggaranId);
        if (!anggaran) {
            return res.status(404).json({ message: "Anggaran tidak ditemukan" });
        } else {
            await anggaran.destroy();
            res.status(200).json({ message: "Anggaran berhasil dihapus" });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const UpdateAnggaran = async (req, res) => {
    try {
        const { AnggaranId } = req.params;
        const { Bidang, Tahapan, RencanaAnggaran, Realisasi, TanggalAnggaran, ProyekId } = req.body;
        const anggaran = await Anggaran.findByPk(AnggaranId);
        if (!anggaran) {
            return res.status(404).json({ message: "Anggaran tidak ditemukan" });
        }
        await anggaran.update({
            Bidang,
            Tahapan,
            RencanaAnggaran,
            Realisasi,
            TanggalAnggaran,
            ProyekId,
        });
        res.status(200).json({ message: "Anggaran berhasil diperbarui", data: anggaran });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAnggaran,
    createAnggaran,
    DeleteAnggaran,
    UpdateAnggaran,
};