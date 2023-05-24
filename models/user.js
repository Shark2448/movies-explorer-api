const mongoose = require('mongoose');

const validator = require('validator');
const bcrypt = require('bcryptjs');

const BadTokenError = require('../errors/BadTokenError')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
      default: 'Александр',
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
  },
  { versionKey: false },
);

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new BadTokenError('Неправильные почта или пароль');
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new BadTokenError('Неправильные почта или пароль');
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);