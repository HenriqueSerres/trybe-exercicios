const express = require('express');
const router = require('../22.5/routers');

const app = express();

const teste = [
	{id: 1},
	{id: 2},
	{id: 3}
];

const PORT = 3000;

app.get('/', (req, res)=> {
	return res.status(200).send(teste);
});

app.use('/user', router);

app.listen(PORT, () => console.log('Run server http://localhost:3000'));
