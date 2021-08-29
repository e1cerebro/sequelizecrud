var express = require('express');
var router = express.Router();

/* HANDLES A GET REQUEST: homepage url */
router.get('/', function(request, response) {
	response.render('index', { title: 'Blackforce CRUD Nodejs Training' });
});

module.exports = router;
