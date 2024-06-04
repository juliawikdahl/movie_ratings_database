const express = require('express');
const Movie = require('../models/Movie');
const Review = require('../models/Review'); /
const auth = require('../middleware/auth'); 

const router = express.Router();

router.post('/',  auth, async (req, res) => {
  const { title, director, releaseYear, genre } = req.body;
  const movie = new Movie({ title, director, releaseYear, genre });
  await movie.save();
  res.status(201).send(movie);
});

router.get('/',  async (req, res) => {
  const movies = await Movie.find();
  res.send(movies);
});

router.get('/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) {
    return res.status(404).send('Movie not found');
  }
  res.send(movie);
});

router.put('/:id', auth, async (req, res) => {
  const { title, director, releaseYear, genre } = req.body;
  const movie = await Movie.findByIdAndUpdate(req.params.id, { title, director, releaseYear, genre }, { new: true });
  if (!movie) {
    return res.status(404).send('Movie not found');
  }
  res.send(movie);
});

router.delete('/:id', auth, async (req, res) => {
  const movie = await Movie.findByIdAndDelete(req.params.id);
  if (!movie) {
    return res.status(404).send('Movie not found');
  }
  res.send('Movie deleted');
});

router.get('/:id/reviews', async (req, res) => {
  try {
    const reviews = await Review.find({ movieId: req.params.id });
    res.send(reviews);
  } catch (error) {
    res.status(500).send('Error retrieving reviews');
  }
});

module.exports = router;
