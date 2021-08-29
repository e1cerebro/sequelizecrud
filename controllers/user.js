const moment = require('moment');
const User = require('../models').User;

const ListUsers = async (request, response) => {
	try {
		let users = await User.findAll({raw:true, order: [
			['name', 'DESC'],
		]});
		response.render('./users/read-users', {title: 'Read Users', users: users, moment: moment});
	} catch (error) {
		return response.send(`users could not be found ${error}`);
	}
}

const showCreateForm = async (request, response) => {
	response.render('./users/create-user', {title: 'Create Users'});
}
const CreateUser = async (request, response) => {
	try {
		let creat_user_args = { 
			name: request.body.name,
			age: request.body.age,
			department: request.body.department,
			role: request.body.role ,
			status: request.body.status 
		};
		const user = await User.create(creat_user_args);
		response.redirect('/users');	
	} catch (error) {
		response.send(`could not create user ${error}`);
	}
}

const SingleUser = async (request, response) => {
	try {
		let user = await User.findOne({raw: true, where: {
			id: request.params.user_id
		}});
		response.render('./users/single-user', {title: 'Single User', user: user, moment: moment});
	} catch (error) {
		return response.send(`users could not be found ${error}`);
	}
}

const ShowUpdateForm = async (request, response) => {
	let user;
	try {
		user = await User.findOne({raw:true, where: {id: request.params.id }});
		response.render('./users/update-user', {title: `Update ${user.name} Record`, user: user})
	} catch (error) {
		return response.send(`users could not be found ${error}`);
	}
}

const UpdateUser = async (request, response) => {
	let users;
	try {
		let update_data_args = { 
			name: request.body.name,
			age: request.body.age,
			department: request.body.department,
			role: request.body.role ,
			status: request.body.status 
		};

		let user = await User.update(update_data_args, {
			where: {
				id: request.params.user_id
			}
		});

		response.redirect(`/users/view/${request.params.user_id}`);

	} catch (error) {
		return response.send(`users could not be found ${error}`);
	}
}

const DeleteUser = async(request, response) => {
	let users;
	try {
		let status = await User.destroy({
			where: {
				id: request.params.id
			}
		});

		response.redirect('/users')
	} catch (error) {
		return response.send(`users could not be found ${error}`);
	}
}

module.exports = {
	CreateUser: CreateUser,
	ListUsers: ListUsers,
	SingleUser: SingleUser,
	UpdateUser: UpdateUser,
	ShowUpdateForm: ShowUpdateForm,
	DeleteUser: DeleteUser,
	showCreateForm: showCreateForm
}