const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Users = sequelize.define(
    "Users",
    {
        UserId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        Username  : {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        Password  : {
            type: DataTypes.STRING(150),
           allowNull: false,
        },


    },
    {
        tableName: "users",
        timestamps: false,
    }
);

module.exports = Users;