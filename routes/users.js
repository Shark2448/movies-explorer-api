const userRouter = require('express').Router();
const { celebrateUpdateUserProfile } = require('../constants');

const {
  getUserInfo,
  updateUserProfile,
} = require('../controllers/users');

userRouter.get('/me', getUserInfo);
userRouter.patch('/me', celebrateUpdateUserProfile, updateUserProfile);

module.exports = userRouter;