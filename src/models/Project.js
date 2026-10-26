const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Project = sequelize.define(
    "Project",
    {
        ProyekId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        NamaProyek  : {
            type: DataTypes.STRING(150),
            allowNull: false,
        },

        Jenis: {
            type: DataTypes.ENUM(
                "SUTT",
                "GI"
            ),
            allowNull: false,
        },
        Perizinan: {
            type: DataTypes.ENUM(
                "KKPR",
                "Penetapan Lokasi",
                "Lingkungan",
                "PPKH",
                "PBG"
            ),
            allowNull: false,
        },

    },
    {
        tableName: "proyek",
        timestamps: false,
    }
);

module.exports = Project;