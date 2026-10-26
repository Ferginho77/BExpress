const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Bidang = sequelize.define(
    "Bidang",
    {
        BidangId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

         ProyekId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        Domain: {
            type: DataTypes.ENUM("lahan", "row"),
            allowNull: false,
        },

        NamaGrup  : {
            type: DataTypes.STRING(150),
            allowNull: false,
        },

        NoBidang  : {
            type: DataTypes.STRING(150),
           allowNull: false,
        },
        Luas  : {
            type: DataTypes.DECIMAL(10, 2),
           allowNull: false,
        },

        Status: {
            type: DataTypes.ENUM("Belum Sepakat", "Sepakat", "Bebas"),
            allowNull: false,
        },
        SertiStatus: {
            type: DataTypes.ENUM("Belum Sertifikasi", "Proses", "Selesai"),
            allowNull: false,
        },

        Desa: {
            type: DataTypes.STRING(150),
           allowNull: false,
        },
        Kecamatan: {
            type: DataTypes.STRING(150),
           allowNull: false,
        },
        Kabupaten: {
            type: DataTypes.STRING(150),
           allowNull: false,
        },
        PemilikSebelumnya: {
            type: DataTypes.STRING(150),
           allowNull: false,
        },
        AlasHak: {
            type: DataTypes.STRING(150),
           allowNull: false,
        },
        NominalGanti: {
            type: DataTypes.DECIMAL(10, 2),
           allowNull: false,
        },

    },
    {
        tableName: "bidang",
        timestamps: false,
    }
);

module.exports = Bidang;