const router = require('express').Router();

const validation = require('../22.5/middleWare/validation');

router.post('/register', validation, (_req, res) => {
	res.status(200).json({ message: 'user created' });
});

router.post('/login', validation, (_req, res) => {
	res.status(200).json({ token: '86567349784e' });
});

module.exports = router;