var express = require('express');
var router = express.Router();

/* GET: users listing. */
router.get('/', function(request, response, next) {
	response.render('./users/read-users', {title: 'Read Users'});
});

router.get('/:user-id', function(request, response, next) {
	response.render('./users/list-users', {title: 'Single User'});
});

/* GET: shows the create user form */
router.get('/create', function(request, response, next) {
	response.render('./users/create-user', {title: 'Create Users'});
});

/* POST: Handles the submitted form */
router.post('/create', function(request, response, next) {
	response.send('Handle user creation');
});

/* SHOW UPDATE VIEW: Handles the updating view */
router.get('/update/:id', function(request, response, next) {
	response.render('./users/update-user', {title: 'Update [USER-NAME]'})
});

/* UPDATE: Handles the submitted form */
router.put('/update/:id', function(request, response, next) {
	response.send('Handle user creation');
});

/* GET: Handles the submitted form */
router.get('/delete/:id', function(request, response, next) {
	response.send('Handle deleting users');
});

module.exports = router;
