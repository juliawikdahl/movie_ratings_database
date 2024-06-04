const express = require('express');
const Review = require('../models/Review');
const auth = require('../middleware/auth'); 

const router = express.Router();

router.post('/',  auth, async (req, res) => {
  const { movieId, userId, rating, comment } = req.body;
  const review = new Review({ movieId, userId, rating, comment });
  await review.save();
  res.status(201).send(review);
});

router.get('/', async (req, res) => {
  const reviews = await Review.find();
  res.send(reviews);
});

router.get('/:id', async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review) {
    return res.status(404).send('Review not found');
  }
  res.send(review);
});

router.put('/:id', auth, async (req, res) => {
  const { rating, comment } = req.body;
  const review = await Review.findByIdAndUpdate(req.params.id, { rating, comment }, { new: true });
  if (!review) {
    return res.status(404).send('Review not found');
  }
  res.send(review);
});

router.delete('/:id', auth, async (req, res) => {
  const review = await Review.findByIdAndDelete(req.params.id);
  if (!review) {
    return res.status(404).send('Review not found');
  }
  res.send('Review deleted');
});

module.exports = router;
