const Item = require("../models/ItemModel");

// GET ALL items
const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();

        res.status(200).json({
            count: items.length,
            items,
          });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// GET an item
const getItem = async (req, res) => {
    const { id } = req.params;t
    try {
        const item = await Item.findById({_id: id})

        if(!item){
            return res.status(404).json({error: 'No item found'})
        }

        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getAllItems,
    getItem,
}