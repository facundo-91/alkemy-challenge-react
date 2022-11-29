const express = require('express');
const axios = require('axios');
const path = require('path');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;
const LOGIN_URL = 'http://challenge-react.alkemy.org/';
const SEARCH_URL = `https://www.superheroapi.com/api/${process.env.ACCESS_TOKEN}/search/`;

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());

app.post('/auth/login', async (req, res) => {
	const body = req.body;

	try {
		const token = await axios.post(LOGIN_URL, {
			email: body.email,
			password: body.password,
		});

		res.send(token.data);
	} catch (error) {
		res.status(401).send({ message: error.message, status: 401 });
	}
});

app.get('/search/:query', async (req, res) => {
	const searchQuery = req.params.query;

	try {
		const results = await axios.get(`${SEARCH_URL}${searchQuery}`);

		res.send(results.data);
	} catch (error) {
		res.status(error.status).send(error.message);
	}
});

app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
