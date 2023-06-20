const express = require('express');
const mongoose = require('mongoose');

const { mongooseURL } = require('./constants');
const rateLimiterUsingThirdParty = require('./middlewares/rateLimiter');
const helmet = require('helmet');
// const cors = require('cors');

const { PORT = 3000, MONGO_URL, NODE_ENV } = process.env;

if (NODE_ENV !== 'production') {
  mongoose.connect(mongooseURL);
} else {
  mongoose.connect(MONGO_URL);
}

require('dotenv').config();

const { errors } = require('celebrate');

const handleErrors = require('./middlewares/handleErrors');
const router = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(helmet());

// app.use(cors());

app.use(requestLogger);

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(handleErrors);

app.use(rateLimiterUsingThirdParty);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});