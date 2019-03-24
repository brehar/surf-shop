const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
	res.send('INDEX /posts/:id/reviews');
});

router.post('/', (req, res) => {
	res.send('CREATE /posts/:id/reviews');
});

router.get('/:review_id/edit', (req, res) => {
	res.send('EDIT /posts/:id/reviews/:review_id/edit');
});

router.put('/:review_id', (req, res) => {
	res.send('UPDATE /posts/:id/reviews/:review_id');
});

router.delete('/:review_id', (req, res) => {
	res.send('DELETE /posts/:id/reviews/:review_id');
});

module.exports = router;
