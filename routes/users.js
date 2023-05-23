const userRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getUserInfo,
  updateUserProfile,
} = require('../controllers/users');

userRouter.get('/me', getUserInfo);
userRouter.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
}), updateUserProfile);

module.exports = userRouter;