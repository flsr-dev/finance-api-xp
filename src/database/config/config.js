require('dotenv/config');

const {
  DB_PORT,
  DB_PWD,
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PORT_DEV,
  DB_PWD_DEV,
  DB_HOST_DEV,
  DB_NAME_DEV,
  DB_USER_DEV,
} = process.env;

module.exports = {
  development: {
    username: DB_USER_DEV,
    password: DB_PWD_DEV,
    database: DB_NAME_DEV,
    host: DB_HOST_DEV,
    port: DB_PORT_DEV,
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '',
    dialect: 'mysql',
  },
  production: {
    username: DB_USER,
    password: DB_PWD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
};
