const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('pages/rent/rent-list', { navLocation: 'rent' });
});

module.exports = router;