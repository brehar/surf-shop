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

router.get('/forgot-password', (req, res) => {
	res.send('GET /forgot-password');
});

router.put('/forgot-password', (req, res) => {
	res.send('PUT /forgot-password');
});

router.get('/reset-password/:token', (req, res) => {
	res.send('GET /reset-password/:token');
});

router.put('/reset-password/:token', (req, res) => {
	res.send('PUT /reset-password/:token');
});

module.exports = router;
