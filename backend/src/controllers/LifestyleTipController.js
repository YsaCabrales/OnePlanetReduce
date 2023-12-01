const Tip = require("../models/LifestyleTipModel");

// GET ALL tips
const getAllTips = async (req, res) => {
    try {
        const tips = await Tip.find();

        res.status(200).json({
            count: tips.length,
            tips,
          });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// GET a tip
const getTip = async (req, res) => {
    const { id } = req.params;t
    try {
        const tip = await Tip.findById({_id: id})

        if(!tip){
            return res.status(404).json({error: 'No tip found'})
        }

        res.status(200).json(tip);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// GET tips by category
const getTipsByCategory = async (req, res) => {
    
}

module.exports = {
    getAllTips,
    getTip,
}