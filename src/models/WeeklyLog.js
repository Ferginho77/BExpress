const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const WeeklyLog = sequelize.define(
    "WeeklyLog",
    {
        WeeklyId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Kategori  : {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        Capaian  : {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        Catatan  : {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        Author  : {
            type: DataTypes.STRING(150),
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
        tableName: "WeeklyLog",
        timestamps: false,
    }
);

module.exports = WeeklyLog;