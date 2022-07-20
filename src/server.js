const app = require('./app');
require('dotenv').config();

const { PORT } = process.env;

// eslint-disable-next-line no-console
app.listen(PORT || 8000, () => console.log(`App running on ${PORT}`));
