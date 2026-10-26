const WeeklyLog = require('../models/Anggaran');

const getWeekly = async (req, res) => {
    try {
        const Weekly = await WeeklyLog.findAll({
            order: [["WeeklyId", "DESC"]],
        });
        res.json(Weekly);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getWeekly,
};