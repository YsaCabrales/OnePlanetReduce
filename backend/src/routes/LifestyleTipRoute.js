const express = require('express');
const router = express.Router();
const {
    getAllTips,
    getTip
} = require("../controllers/LifestyleTipController");

router.get('/', getAllTips);
router.get('/:id', getTip);

module.exports = router;