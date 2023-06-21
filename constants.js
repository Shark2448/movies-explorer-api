const { celebrate, Joi } = require('celebrate');

const mongooseURL = 'mongodb://127.0.0.1:27017/bitfilmsdb';

const celebrateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const celebrateCreateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const celebrateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director : Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    trailerLink: Joi.string().required().uri(),
    thumbnail: Joi.string().required(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const celebrateDeleteMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().alphanum().length(24).hex(),
  }),
});

const celebrateUpdateUserProfile = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

module.exports = {
  mongooseURL,
  celebrateLogin,
  celebrateCreateUser,
  celebrateCreateMovie,
  celebrateDeleteMovie,
  celebrateUpdateUserProfile
};
