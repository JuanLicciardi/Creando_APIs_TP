const express = require('express');
const router = express.Router();
const {list, detail, create, destroy} = require('../../controllers/api/moviesAPIController');

// Accede por /api/movies

router.get('/', list);
router.get('/:id', detail);
router.post('/create', create);
router.delete('/delete/:id', destroy);

module.exports = router;