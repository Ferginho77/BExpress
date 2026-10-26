const express = require("express");
const cors = require("cors");

const projectRoutes = require("./routes/projectRoutes");
const anggaranRoutes = require("./routes/AnggaranRoutes");
const bidangRoutes = require("./routes/BidangRoutes");
const weeklyLogRoutes = require("./routes/WeeklyLogRoutes");

const app = express();

// Ambil daftar origin frontend dari environment variable.
// Jika tidak diatur, gunakan localhost untuk development.
const allowedOrigins = (
    process.env.FRONTEND_URL || "http://localhost:5173"
)
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

app.use(
    cors({
        origin: (origin, callback) => {
            // Request tanpa Origin, misalnya dari beberapa klien API.
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(
                new Error(`Origin ${origin} tidak diizinkan oleh CORS`)
            );
        },
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "TaskFlow API is running",
        environment: process.env.NODE_ENV || "development",
    });
});

app.use("/api/projects", projectRoutes);
app.use("/api/anggaran", anggaranRoutes);
app.use("/api/bidang", bidangRoutes);
app.use("/api/weekly", weeklyLogRoutes);

module.exports = app;