const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Anggaran = sequelize.define(
    "Anggaran",
    {
        AnggaranId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
         Bidang: {
            type: DataTypes.ENUM(
                "Perizinan",
                "Pengadaan Tanah",
                "Kompensasi ROW",
                "Sertifikasi"
            ),
            allowNull: false,
        },

        Tahapan  : {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        RencanaAnggaran: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Realisasi: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        TanggalAnggaran: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        ProyekId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },
    {
        tableName: "anggaran",
        timestamps: false,
    }
);

module.exports = Anggaran;