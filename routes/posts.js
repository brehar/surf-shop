const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('INDEX /posts');
});

router.get('/new', (req, res) => {
	res.send('NEW /posts/new');
});

router.post('/', (req, res) => {
	res.send('CREATE /posts');
});

router.get('/:id', (req, res) => {
	res.send('SHOW /posts/:id');
});

router.get('/:id/edit', (req, res) => {
	res.send('EDIT /posts/:id/edit');
});

router.put('/:id', (req, res) => {
	res.send('UPDATE /posts/:id');
});

router.delete('/:id', (req, res) => {
	res.send('DELETE /posts/:id');
});

module.exports = router;
