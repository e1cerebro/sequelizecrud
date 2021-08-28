var express = require('express');
var router = express.Router();

/* GET: users listing. */
router.get('/', function(req, res, next) {
	res.render('./users/read-users', {title: 'Read Users'});
});

router.get('/:user-id', function(req, res, next) {
	res.render('./users/list-users', {title: 'Single User'});
});

/* GET: shows the create user form */
router.get('/create', function(req, res, next) {
	res.render('./users/create-user', {title: 'Create Users'});
});

/* POST: Handles the submitted form */
router.post('/create', function(req, res, next) {
	res.send('Handle user creation');
});

/* SHOW UPDATE VIEW: Handles the updating view */
router.get('/update/:id', function(req, res, next) {
	res.render('./users/update-user', {title: 'Update [USER-NAME]'})
});

/* UPDATE: Handles the submitted form */
router.put('/update/:id', function(req, res, next) {
	res.send('Handle user creation');
});

/* GET: Handles the submitted form */
router.get('/delete/:id', function(req, res, next) {
	res.send('Handle deleting users');
});

module.exports = router;
