const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { login, createUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const userRouter = require('./users');
const movieRouter = require('./movies');

const NotFoundError = require('../errors/NotFoundError');

router.post('/signin', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);

router.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), createUser);

router.use(auth);

router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use('/', (req, res, next) => {
  next(new NotFoundError('Данная страница не найдена'));
});

module.exports = router;
