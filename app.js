const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');

require('dotenv').config();

const { errors } = require('celebrate');

const handleErrors = require('./middlewares/handleErrors');
const router = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/moviedb');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(requestLogger);

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});