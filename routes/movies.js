const movieRouter = require('express').Router();
const { celebrateCreateMovie, celebrateDeleteMovie } = require('../constants');

const {
  createMovie,
  getMovies,
  deleteMovie,
} = require('../controllers/movies');

movieRouter.post('/', celebrateCreateMovie, createMovie);
movieRouter.get('/', getMovies);
movieRouter.delete('/:movieId', celebrateDeleteMovie, deleteMovie);

module.exports = movieRouter;
