const express = require('express');
require('express-async-errors');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/error.middleware');
require('dotenv').config();

const app = express();

app.use(express.json());
app.disable('x-powered-by');

app.use(routes);
app.use(errorMiddleware);

module.exports = app;
