const movieRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  createMovie,
  getMovies,
  deleteMovie,
} = require('../controllers/movies');

movieRouter.post('/', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director : Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    trailerLink: Joi.string().required(),
    thumbnail: Joi.string().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), createMovie);
movieRouter.get('/', getMovies);
movieRouter.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().alphanum().length(24).hex(),
  }),
}), deleteMovie);

module.exports = movieRouter;
