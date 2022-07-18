const express = require('express');
require('dotenv').config();

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.disable('x-powered_by');

app.get('/', (_req, res) => {
  res.send('Hello, XP!');
});

// eslint-disable-next-line no-console
app.listen(PORT || 8000, () => console.log(`App running on ${PORT}`));

module.exports = app;
