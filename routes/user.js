const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router
	.get('/', userController.getAll)
	.get('/:id', userController.getById)
	.post('/', userController.createUser)
	.put('/:id', userController.createUser) // Controller not coded
	.delete('/:id', userController.createUser); // Controller not coded

module.exports = router;