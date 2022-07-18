const express = require('express');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/error.middleware');
require('dotenv').config();
require('express-async-errors');

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.disable('x-powered-by');

app.use(routes);
app.use(errorMiddleware);

// eslint-disable-next-line no-console
app.listen(PORT || 8000, () => console.log(`App running on ${PORT}`));

module.exports = app;
