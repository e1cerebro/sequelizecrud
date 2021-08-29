var express = require('express');
var router = express.Router();

/* GET REQUEST: list all users. */
router.get('/', function(request, response) {
	response.render('./users/list-users', {title: 'Read Users'});
});

/* GET REQUEST: Show single user */ 
router.get('/:user_id/view', function(request, response) {
	response.render('./users/single-user', {title: 'Single User'});
});

/* GET REQUEST: shows the create user form */
router.get('/create', function(request, response) {
	response.render('./users/create-user', {title: 'Create Users'});
});

/* POST REQUEST: Handles the submitted form */
router.post('/create', function(request, response) {
	response.send('Handle user creation');
});

/* SHOW UPDATE VIEW: shows the update view for the single user */
router.get('/update/:id', function(request, response) {
	response.render('./users/update-user', {title: 'Update [USER-NAME]'})
});

/* UPDATE: Handles the submitted form */
router.post('/update/:id', function(request, response) {
	response.send('Update the posted update request');
});

/* GET: Handles the submitted form */
router.get('/delete/:id', function(request, response) {
	response.send('Handle deleting users');
});

module.exports = router;
