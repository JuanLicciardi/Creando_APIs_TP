const express = require('express');
const router = express.Router();
const {list, detail} = require('../../controllers/api/genresAPIController');

// Acceso por /api/genres
router
    .get('/', list)
    .get('/:id', detail)


module.exports = router;