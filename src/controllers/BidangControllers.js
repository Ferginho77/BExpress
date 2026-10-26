const Bidang = require('../models/Bidang');

// READ
const GetBidang = async (req, res) => {
    try {
        const bidang = await Bidang.findAll({
              order: [["BidangId", "DESC"]],
        });
        res.json(bidang);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const CreateBidang = async (req, res) => {
    try {
        const { ProjectId, Domain, NamaGrup, NoBidang, Luas, Status, SertiStatus, Desa, Kecamatan, Kabupaten, PemilikSebelumnya, AlasHak, NominalGanti } = req.body;

        if (!ProjectId || !Domain || !NamaGrup || !NoBidang || !Luas || !Status || !SertiStatus || !Desa || !Kecamatan || !Kabupaten || !PemilikSebelumnya || !AlasHak || !NominalGanti) {
            return res.status(400).json({ message: "Semua field wajib diisi" });
        }
        const bidang = await Bidang.create({
            ProjectId,
            Domain,
            NamaGrup,
            NoBidang,
            Luas,
            Status,
            SertiStatus,
            Desa,
            Kecamatan,
            Kabupaten,
            PemilikSebelumnya,
            AlasHak,
            NominalGanti,
        });
        res.status(201).json({ message: "Bidang berhasil dibuat", data: bidang });
    } catch (error) {
        res.status(500).json({ message: error.message });
    

    }
}

const UpdateBidang = async (req, res) => {
    try {
       const  { BidangId } = req.params;
       const { ProjectId, Domain, NamaGrup, NoBidang, Luas, Status, SertiStatus, Desa, Kecamatan, Kabupaten, PemilikSebelumnya, AlasHak, NominalGanti } = req.body;
       const bidang = await Bidang.findByPk(BidangId);
       if (!bidang) {
            return res.status(404).json({ message: "Bidang tidak ditemukan" });
       }
         bidang.ProjectId = ProjectId;
            bidang.Domain = Domain;
            bidang.NamaGrup = NamaGrup;
            bidang.NoBidang = NoBidang;
            bidang.Luas = Luas;
            bidang.Status = Status;
            bidang.SertiStatus = SertiStatus;
            bidang.Desa = Desa;
            bidang.Kecamatan = Kecamatan;
            bidang.Kabupaten = Kabupaten;
            bidang.PemilikSebelumnya = PemilikSebelumnya;
            bidang.AlasHak = AlasHak;
            bidang.NominalGanti = NominalGanti;

        await bidang.save();
        res.json({ message: "Bidang berhasil diperbarui", data: bidang });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    GetBidang,
    UpdateBidang,
    CreateBidang,
}

