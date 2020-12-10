const userController = {
	getAll : (req, res, next) => {
		return res.status(200).json({ success: true, message: 'Job well done'});
	},
	getById : (req, res, next) => {
		const { id } = req.params;
		return res.status(200).json({ success: true, message: `Job well done ${id}`});
	},
	createUser : (req, res, next) => {
		const { id, firstName, lastName } = req.body;
		const userPayload = {
			id,
			firstName,
			lastName
		}
		return res
			.status(200)
			.json({ 
				success: true, 
				message: `Job well done ${id}`,
				data: userPayload
			});
	}
}

module.exports = userController;