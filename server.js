require("dotenv").config();

const app = require("./src/app");
const sequelize = require("./src/config/db");


const PORT = process.env.PORT || 5001;

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully.");

        app.listen(PORT, () => {
            console.log(`TaskFlow API running on port ${PORT}`);
            console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}
module.exports = app;
startServer();