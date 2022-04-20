const validation = (req, res, next) => {
	const { user, password, email } = req.body;
	const passwordRegex = /^[0-9]*$/;

	if(!user || user.length < 3 ||
    !password.match(passwordRegex) || password.length < 3 || password.length > 8 ||
    !email || email.includes('@') || email.includes('.com')) return res.status(400).json({'message': 'Invalid Data'});

	next();
};
module.exports = validation;