const router = require('express').Router();
const { celebrateLogin, celebrateCreateUser } = require('../constants');

const { login, createUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const userRouter = require('./users');
const movieRouter = require('./movies');

const NotFoundError = require('../errors/NotFoundError');

router.post('/signin', celebrateLogin, login);

router.post('/signup', celebrateCreateUser, createUser);

router.use(auth);

router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use('/', (req, res, next) => {
  next(new NotFoundError('Данная страница не найдена'));
});

module.exports = router;
