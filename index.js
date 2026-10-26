
require("dotenv").config();

const app = require("./src/app");
const sequelize = require("./src/config/db");

// Inisialisasi koneksi database sebelum memproses request.
let dbConnection;

app.use(async (req, res, next) => {
    try {
        if (!dbConnection) {
            dbConnection = sequelize.authenticate().catch((error) => {
                dbConnection = null;
                throw error;
            });
        }

        await dbConnection;
        next();
    } catch (error) {
        console.error("Database connection failed:", error);
        res.status(500).json({
            message: "Database connection failed",
        });
    }
});

module.exports = app;
