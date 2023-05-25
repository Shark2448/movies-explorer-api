const rateLimiter = require('express-rate-limit');

const rateLimiterUsingThirdParty = rateLimiter({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 100,
  message: 'Вы сделали больше 100 запросов за последние 24 часа!!',
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = rateLimiterUsingThirdParty;