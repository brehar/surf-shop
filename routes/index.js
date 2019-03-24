const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index', { title: 'Home' });
});

router.get('/register', (req, res) => {
	res.send('GET /register');
});

router.post('/register', (req, res) => {
	res.send('POST /register');
});

router.get('/login', (req, res) => {
	res.send('GET /login');
});

router.post('/login', (req, res) => {
	res.send('POST /login');
});

router.get('/profile', (req, res) => {
	res.send('GET /profile');
});

router.put('/profile/:user_id', (req, res) => {
	res.send('PUT /profile/:user_id');
});

router.get('/forgot', (req, res) => {
	res.send('GET /forgot');
});

router.put('/forgot', (req, res) => {
	res.send('PUT /forgot');
});

router.get('/reset/:token', (req, res) => {
	res.send('GET /reset/:token');
});

router.put('/reset/:token', (req, res) => {
	res.send('PUT /reset/:token');
});

module.exports = router;
