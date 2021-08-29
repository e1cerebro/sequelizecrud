var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user');

/* GET: users listing. */
router.get('/', UserController.ListUsers);

/*GET: Single user view*/ 
router.get('/view/:user_id', UserController.SingleUser);

/* GET: shows the create user form */
router.get('/create', UserController.showCreateForm);

/* POST: Handles the submitted form */
router.post('/create', UserController.CreateUser);

/* SHOW UPDATE VIEW: Handles the updating view */
router.get('/update/show/:id', UserController.ShowUpdateForm);

/* UPDATE: Handles the submitted form */
router.post('/update/:user_id', UserController.UpdateUser);

/* GET: Handles the submitted form */
router.get('/delete/:id', UserController.DeleteUser);

module.exports = router;
