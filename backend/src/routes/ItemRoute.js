const express = require('express');
const router = express.Router();
const {
    getAllItems,
    getItem
} = require("../controllers/courseController");

router.get('/', getAllItems);
router.get('/:id', getItem);

module.exports = router;