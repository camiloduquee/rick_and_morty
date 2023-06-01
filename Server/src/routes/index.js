const  getCharById = require('../controllers/getCharById');
const express = require('express');
const router = express.Router(); 

router.get("/:id", getCharById);

module.exports = router;